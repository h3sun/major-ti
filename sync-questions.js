const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const DIMENSION_LABELS = {
  mn: {
    zh: '机制导向 vs 叙事导向',
    en: 'Mechanism Orientation vs Narrative Orientation'
  },
  sr: {
    zh: '系统优化 vs 规则裁决',
    en: 'System Optimization vs Rule Adjudication'
  },
  iv: {
    zh: '激励分析 vs 价值判断',
    en: 'Incentive Analysis vs Value Judgment'
  },
  ec: {
    zh: '证据导向 vs 情境导向',
    en: 'Evidence Orientation vs Context Orientation'
  },
  fc: {
    zh: '证伪建模 vs 情境诠释',
    en: 'Falsification Modeling vs Contextual Interpretation'
  }
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function parseMarkdownTable(tableText) {
  const lines = tableText
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  assert(lines.length >= 2, 'Invalid markdown table: too few lines');

  const parseRow = (line) => line.slice(1, -1).split('|').map((cell) => cell.trim());
  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow).map((cells) => {
    const row = {};
    headers.forEach((header, index) => {
      row[header] = cells[index] || '';
    });
    return row;
  });

  return { headers, rows };
}

function extractQuestionSections(markdownPath) {
  const raw = fs.readFileSync(markdownPath, 'utf8');
  const parts = raw.split(/^##\s+Q\d+\s*$/gm);
  const sections = parts.slice(1).map((part) => part.trim()).filter(Boolean);
  assert(sections.length > 0, `No question sections found in ${path.basename(markdownPath)}`);
  return sections;
}

function extractTables(section, fileLabel, index) {
  const tables = section
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.startsWith('|'));
  assert(tables.length >= 3, `${fileLabel} Q${index + 1}: expected at least 3 markdown tables`);
  return tables.map(parseMarkdownTable);
}

function parseScoreMap(input) {
  const text = (input || '').trim();
  if (!text) return {};

  return text.split(',').reduce((acc, part) => {
    const [rawKey, rawValue] = part.split(':').map((item) => item.trim());
    assert(rawKey, `Invalid score fragment "${part}"`);
    assert(rawValue !== undefined && rawValue !== '', `Invalid score fragment "${part}"`);
    acc[rawKey] = Number(rawValue);
    assert(!Number.isNaN(acc[rawKey]), `Invalid numeric value in "${part}"`);
    return acc;
  }, {});
}

function parseMainQuestion(section, index, fileLabel) {
  const [metaTable, promptTable, answerTable] = extractTables(section, fileLabel, index);
  const meta = Object.fromEntries(metaTable.rows.map((row) => [row.field, row.value]));
  const promptRow = promptTable.rows[0] || {};

  const question = {
    type: meta.type,
    dimKey: meta.dimKey,
    zh: promptRow.zh,
    en: promptRow.en
  };

  if (question.type === 'choice') {
    question.options = answerTable.rows.map((row) => ({
      zh: row.zh,
      en: row.en,
      dimDelta: parseScoreMap(row.dimDelta),
      spec: parseScoreMap(row.spec)
    }));
  } else {
    question.stances = answerTable.rows.reduce((acc, row) => {
      acc[row.stance] = {
        dimDelta: parseScoreMap(row.dimDelta),
        spec: parseScoreMap(row.spec)
      };
      return acc;
    }, {});
  }

  return question;
}

function parseV2Question(section, index, fileLabel) {
  const [metaTable, promptTable, answerTable] = extractTables(section, fileLabel, index);
  const meta = Object.fromEntries(metaTable.rows.map((row) => [row.field, row.value]));
  const promptRow = promptTable.rows[0] || {};

  const question = {
    type: meta.type,
    dimKey: meta.dimKey,
    text: promptRow.text
  };

  if (question.type === 'choice') {
    question.options = answerTable.rows.map((row) => ({
      text: row.text,
      dimDelta: parseScoreMap(row.dimDelta),
      spec: parseScoreMap(row.spec)
    }));
  } else {
    question.stances = answerTable.rows.reduce((acc, row) => {
      acc[row.stance] = {
        dimDelta: parseScoreMap(row.dimDelta),
        spec: parseScoreMap(row.spec)
      };
      return acc;
    }, {});
  }

  return question;
}

function parseV3Question(section, index, fileLabel) {
  const [metaTable, promptTable, answerTable] = extractTables(section, fileLabel, index);
  const meta = Object.fromEntries(metaTable.rows.map((row) => [row.field, row.value]));
  const promptRow = promptTable.rows[0] || {};

  return {
    type: meta.type,
    text: promptRow.text,
    options: answerTable.rows.map((row) => ({
      text: row.text,
      score: parseScoreMap(row.score)
    }))
  };
}

function validateQuestion(question, fileLabel, index, mode) {
  const prefix = `${fileLabel} Q${index + 1}`;
  assert(question && typeof question === 'object', `${prefix}: question must be an object`);
  assert(question.type === 'choice' || question.type === 'stance', `${prefix}: invalid type "${question.type}"`);
  assert(DIMENSION_LABELS[question.dimKey], `${prefix}: invalid dimKey "${question.dimKey}"`);

  if (mode === 'bilingual') {
    assert(typeof question.zh === 'string' && question.zh.trim(), `${prefix}: missing zh`);
    assert(typeof question.en === 'string' && question.en.trim(), `${prefix}: missing en`);
  } else {
    assert(typeof question.text === 'string' && question.text.trim(), `${prefix}: missing text`);
  }

  if (question.type === 'choice') {
    assert(Array.isArray(question.options) && question.options.length > 0, `${prefix}: choice questions need options`);
    question.options.forEach((option, optionIndex) => {
      const optionPrefix = `${prefix} option ${optionIndex + 1}`;
      if (mode === 'bilingual') {
        assert(typeof option.zh === 'string' && option.zh.trim(), `${optionPrefix}: missing zh`);
        assert(typeof option.en === 'string' && option.en.trim(), `${optionPrefix}: missing en`);
      } else {
        assert(typeof option.text === 'string' && option.text.trim(), `${optionPrefix}: missing text`);
      }
      assert(option.dimDelta && typeof option.dimDelta === 'object', `${optionPrefix}: missing dimDelta`);
      assert(option.spec && typeof option.spec === 'object', `${optionPrefix}: missing spec`);
    });
    return;
  }

  assert(question.stances && typeof question.stances === 'object', `${prefix}: stance questions need stances`);
  ['support', 'neutral', 'oppose'].forEach((key) => {
    const stance = question.stances[key];
    assert(stance && typeof stance === 'object', `${prefix}: missing stance "${key}"`);
    assert(stance.dimDelta && typeof stance.dimDelta === 'object', `${prefix}: stance "${key}" missing dimDelta`);
    assert(stance.spec && typeof stance.spec === 'object', `${prefix}: stance "${key}" missing spec`);
  });
}

function validateV3Question(question, fileLabel, index) {
  const prefix = `${fileLabel} Q${index + 1}`;
  assert(question && typeof question === 'object', `${prefix}: question must be an object`);
  assert(question.type === 'choice', `${prefix}: v3 only supports choice questions`);
  assert(typeof question.text === 'string' && question.text.trim(), `${prefix}: missing text`);
  assert(Array.isArray(question.options) && question.options.length === 4, `${prefix}: v3 questions require exactly 4 options`);

  question.options.forEach((option, optionIndex) => {
    const optionPrefix = `${prefix} option ${optionIndex + 1}`;
    assert(typeof option.text === 'string' && option.text.trim(), `${optionPrefix}: missing text`);
    assert(option.score && typeof option.score === 'object', `${optionPrefix}: missing score`);
    const scoreKeys = Object.keys(option.score);
    assert(scoreKeys.length === 1, `${optionPrefix}: score must target exactly one track`);
    assert(['a', 'b', 'c', 'd'].includes(scoreKeys[0]), `${optionPrefix}: invalid track "${scoreKeys[0]}"`);
  });
}

function toRuntimeQuestion(question, language) {
  const runtime = {
    type: question.type,
    dim: DIMENSION_LABELS[question.dimKey][language],
    text: question[language]
  };

  if (question.type === 'choice') {
    runtime.options = question.options.map((option) => ({
      text: option[language],
      dimDelta: option.dimDelta,
      spec: option.spec
    }));
  } else {
    runtime.stances = question.stances;
  }

  return runtime;
}

function toRuntimeQuestionV2(question) {
  const runtime = {
    type: question.type,
    dim: DIMENSION_LABELS[question.dimKey].zh,
    text: question.text
  };

  if (question.type === 'choice') {
    runtime.options = question.options.map((option) => ({
      text: option.text,
      dimDelta: option.dimDelta,
      spec: option.spec
    }));
  } else {
    runtime.stances = question.stances;
  }

  return runtime;
}

function toRuntimeQuestionV3(question) {
  return {
    type: question.type,
    text: question.text,
    options: question.options.map((option) => ({
      text: option.text,
      score: option.score
    }))
  };
}

function replaceQuestionsBlock(filePath, questions) {
  const html = fs.readFileSync(filePath, 'utf8');
  const pattern = /const QUESTIONS = \[[\s\S]*?\];\s*\n\s*let currentQ = 0;/;
  const generated = `const QUESTIONS = ${JSON.stringify(questions, null, 2)};\n\nlet currentQ = 0;`;
  if (!pattern.test(html)) {
    throw new Error(`Could not locate QUESTIONS block in ${path.basename(filePath)}`);
  }
  const next = html.replace(pattern, generated);
  fs.writeFileSync(filePath, next);
}

function main() {
  const mainSource = extractQuestionSections(path.join(ROOT, 'questions.md'))
    .map((section, index) => parseMainQuestion(section, index, 'questions.md'));
  const v2Source = extractQuestionSections(path.join(ROOT, 'questions-v2.md'))
    .map((section, index) => parseV2Question(section, index, 'questions-v2.md'));
  const v3Source = extractQuestionSections(path.join(ROOT, 'questions-v3.md'))
    .map((section, index) => parseV3Question(section, index, 'questions-v3.md'));

  mainSource.forEach((question, index) => validateQuestion(question, 'questions.md', index, 'bilingual'));
  v2Source.forEach((question, index) => validateQuestion(question, 'questions-v2.md', index, 'v2'));
  v3Source.forEach((question, index) => validateV3Question(question, 'questions-v3.md', index));

  replaceQuestionsBlock(path.join(ROOT, 'index.html'), mainSource.map((question) => toRuntimeQuestion(question, 'zh')));
  replaceQuestionsBlock(path.join(ROOT, 'en.html'), mainSource.map((question) => toRuntimeQuestion(question, 'en')));
  replaceQuestionsBlock(path.join(ROOT, 'v2.html'), v2Source.map(toRuntimeQuestionV2));
  replaceQuestionsBlock(path.join(ROOT, 'v3.html'), v3Source.map(toRuntimeQuestionV3));

  console.log(`Synced ${mainSource.length} bilingual questions, ${v2Source.length} v2 questions, and ${v3Source.length} v3 questions.`);
}

main();
