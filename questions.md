# Major-TI Question Bank

适用页面：
- `index.html`（中文）
- `en.html`（英文翻译版）

编辑规则：
- 一道题就是一个 `## Q编号` 区块。
- `meta` 表里只改 `type` 和 `dimKey`。
- `choice` 题改下面的选项表。
- `stance` 题改下面的立场表。
- `dimDelta` 写成 `mn:2` 这种形式；多个值用英文逗号分隔。
- `spec` 写成 `engineering:1, economics:1` 这种形式；没有就留空。
- 改完后运行：`node sync-questions.js`

维度对照：
- `mn` = 机制导向 / 叙事导向
- `sr` = 系统优化 / 规则裁决
- `iv` = 激励分析 / 价值判断
- `fc` = 证伪建模 / 情境诠释

## Q1

| field | value |
| --- | --- |
| type | choice |
| dimKey | mn |

| zh | en |
| --- | --- |
| 一家公司很多人突然离职，你第一反应更像—— | When many people suddenly resign from a company, your first reaction is more like— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 先查制度和流程哪里出了问题。 | First investigate what went wrong in the institution and workflow. | mn:2 | engineering:1, economics:1 |
| B | 先看离职集中在哪些时间点和部门。 | First check which time periods and departments saw clustered resignations. | mn:1 | science:1, economics:1 |
| C | 先听员工私下到底在抱怨什么。 | First listen to what employees are actually complaining about in private. | mn:-1 | humanities:1 |
| D | 先想是谁在定义这是不是“离职潮”。 | First ask who gets to define whether this even counts as a "wave of resignations." | mn:-2 | humanities:2 |

## Q2

| field | value |
| --- | --- |
| type | choice |
| dimKey | mn |

| zh | en |
| --- | --- |
| 看到一场网上争议越吵越大，你更想先搞清楚—— | When you see an online controversy escalating, what do you want to clarify first— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 平台和传播机制是怎么把它推高的。 | How the platform and transmission mechanisms amplified it. | mn:2 | engineering:1, economics:1 |
| B | 信息是从哪个节点开始走样的。 | At which node the information first became distorted. | mn:1 | science:1, engineering:1 |
| C | 不同人在用什么方式讲同一件事。 | How different people are telling the same event in different ways. | mn:-1 | law:1, humanities:1 |
| D | 谁更有能力把自己的版本说成“常识”。 | Who has the strongest ability to turn their version into "common sense." | mn:-2 | humanities:2 |

## Q3

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| zh | en |
| --- | --- |
| 遇到一个长期解决不掉的问题时，我更喜欢先拆它是怎么运作的，而不是先看大家各自怎么讲它。 | When facing a long-unsolved problem, I prefer first to break down how it operates, rather than first looking at how different people describe it. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:2 | science:1, engineering:1 |
| neutral | mn:0 |  |
| oppose | mn:-2 | humanities:1 |

## Q4

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| zh | en |
| --- | --- |
| 看见争议事件时，我通常更在意不同的人是怎么讲述这件事的，而不是先追机制链条。 | When I see a controversial event, I usually care more about how different people narrate it than about tracing the mechanism chain first. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:-2 | law:1, humanities:2 |
| neutral | mn:0 |  |
| oppose | mn:2 | science:1, engineering:1 |

## Q5

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| zh | en |
| --- | --- |
| 我更相信“找到关键环节”，而不是先讨论谁的说法更占上风。 | I trust "finding the key link" more than first debating whose account is more dominant. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:2 | engineering:1, economics:1 |
| neutral | mn:0 |  |
| oppose | mn:-2 | humanities:2 |

## Q6

| field | value |
| --- | --- |
| type | choice |
| dimKey | sr |

| zh | en |
| --- | --- |
| 一个 App 新功能上线后，用户明显变少了，你会先—— | After a new app feature launches, user numbers clearly drop. You would first— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 找出用户到底是在哪一步流失的。 | Find out exactly at which step users are dropping off. | sr:2 | engineering:2 |
| B | 先把路径改顺，把麻烦的地方减掉。 | Smooth the path first and remove the annoying parts. | sr:1 | engineering:1, economics:1 |
| C | 检查它在授权、提示和默认设置上是不是边界不清。 | Check whether boundaries are unclear in permissions, prompts, or default settings. | sr:-1 | law:1 |
| D | 先判断这类功能在边界和责任上是否需要先说清楚。 | Judge first whether this type of feature requires clearer boundaries and responsibilities. | sr:-2 | law:2, humanities:1 |

## Q7

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| zh | en |
| --- | --- |
| 系统出问题时，我更想先优化流程，而不是先补规则。 | When a system has problems, I would rather optimize the process first than patch the rules first. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:2 | engineering:2 |
| neutral | sr:0 |  |
| oppose | sr:-2 | law:2 |

## Q8

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| zh | en |
| --- | --- |
| 再复杂的事情，我也更想先把边界和责任说清楚，而不是先讨论怎么提效。 | No matter how complex something is, I still prefer first to clarify boundaries and responsibility, rather than first discussing efficiency improvements. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:-2 | law:2 |
| neutral | sr:0 |  |
| oppose | sr:2 | engineering:1 |

## Q9

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| zh | en |
| --- | --- |
| 与其堵漏洞，我更倾向于改系统，让人自然不去钻漏洞，而不是一条条加限制。 | Rather than blocking loopholes one by one, I prefer changing the system so people naturally stop exploiting them. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:2 | engineering:2, economics:1 |
| neutral | sr:0 |  |
| oppose | sr:-2 | law:1 |

## Q10

| field | value |
| --- | --- |
| type | choice |
| dimKey | sr |

| zh | en |
| --- | --- |
| 共享单车到处乱停，你更赞成先—— | Shared bikes are being parked chaotically everywhere. You would rather first— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 把停车点、调度和反馈机制设计得更合理。 | Design parking spots, dispatching, and feedback mechanisms more rationally. | sr:2 | engineering:2 |
| B | 用价格和信用分把用户往正确地方引导。 | Use pricing and credit scores to steer users toward the right places. | sr:1 | engineering:1, economics:1 |
| C | 先把哪里能停、谁负责说清楚。 | Clarify first where parking is allowed and who is responsible. | sr:-1 | law:2 |
| D | 先有稳定规则，再谈别的优化。 | Establish stable rules first, then talk about other optimizations. | sr:-2 | law:2 |

## Q11

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| zh | en |
| --- | --- |
| 理解一件事时，我常常先看它在鼓励谁、惩罚谁，而不是先判断它在道德上好不好。 | When understanding something, I often first look at who it rewards and who it punishes, rather than first judging whether it is morally good. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:2 | economics:2 |
| neutral | iv:0 |  |
| oppose | iv:-2 | humanities:1 |

## Q12

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| zh | en |
| --- | --- |
| 有些事情即使有效，我也更在意它对不对，而不是它有没有用。 | Even if something is effective, I still care more about whether it is right than whether it is useful. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:-2 | law:1, humanities:2 |
| neutral | iv:0 |  |
| oppose | iv:2 | economics:1 |

## Q13

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| zh | en |
| --- | --- |
| 制度设计最重要的，在我看来是看它最终会把人推向什么行为，而不是它口号上看起来多正确。 | In my view, the most important thing in institutional design is what behavior it ultimately pushes people toward, not how correct its slogan sounds. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:2 | engineering:1, economics:2 |
| neutral | iv:0 |  |
| oppose | iv:-2 | humanities:1 |

## Q14

| field | value |
| --- | --- |
| type | choice |
| dimKey | iv |

| zh | en |
| --- | --- |
| 学校用高奖金刺激学生拿竞赛奖，你更偏向—— | A school uses large cash rewards to push students to win competitions. You are more inclined to— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 先看奖金会把学生的时间和精力引向哪里。 | First see where the rewards will direct students' time and energy. | iv:2 | economics:2 |
| B | 先看这套激励会不会让真正重要的能力被忽略。 | First see whether this incentive setup makes truly important abilities get neglected. | iv:1 | engineering:1, economics:1 |
| C | 先看这种做法是否符合你心里对教育的理解。 | First see whether this fits your own understanding of what education should be. | iv:-1 | humanities:1 |
| D | 先想教育更应该靠什么来驱动，而不只是看奖励效果。 | First ask what education ought to be driven by, rather than just looking at the reward effect. | iv:-2 | humanities:2 |

## Q15

| field | value |
| --- | --- |
| type | choice |
| dimKey | iv |

| zh | en |
| --- | --- |
| 门诊经常有人预约了又不来，你更支持先—— | In an outpatient clinic, people often make appointments and then fail to show up. You would support first— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 收点违约金，先把行为改过来。 | Charging a small no-show fee to correct the behavior first. | iv:2 | economics:2 |
| B | 不同情况分开处理，再设计更细的提醒办法。 | Separating different cases and then designing more detailed reminder methods. | iv:1 | economics:1, law:1 |
| C | 先确认规则对不同处境的患者是否足够公平。 | First confirming whether the rule is fair enough to patients in different circumstances. | iv:-1 | law:1, humanities:1 |
| D | 先想医疗场景里除了效率，还应优先保留什么。 | First asking what should be preserved in medical settings besides efficiency. | iv:-2 | humanities:2 |

## Q16

| field | value |
| --- | --- |
| type | stance |
| dimKey | fc |

| zh | en |
| --- | --- |
| 看到一个结论时，我会先想它能不能被验证或推翻，而不是先看它是否贴近具体经验。 | When I see a conclusion, I first ask whether it can be verified or overturned, rather than first asking whether it fits concrete experience. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | fc:2 | science:2 |
| neutral | fc:0 |  |
| oppose | fc:-2 | humanities:1 |

## Q17

| field | value |
| --- | --- |
| type | stance |
| dimKey | fc |

| zh | en |
| --- | --- |
| 很多事情一旦被量化，反而会失去重要信息，这对我来说比“先量化再讨论”更接近真实。 | Once many things are quantified, important information is often lost. To me that feels closer to reality than "quantify first, discuss later." |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | fc:-2 | humanities:2 |
| neutral | fc:0 |  |
| oppose | fc:2 | science:1, engineering:1 |

## Q18

| field | value |
| --- | --- |
| type | stance |
| dimKey | fc |

| zh | en |
| --- | --- |
| 相比个别人的故事，我更相信能重复出现的数据模式，而不是更相信具体情境里的感受。 | Compared with individual stories, I trust recurring data patterns more than I trust feelings inside specific contexts. |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | fc:2 | science:2, engineering:1 |
| neutral | fc:0 |  |
| oppose | fc:-2 | humanities:1 |

## Q19

| field | value |
| --- | --- |
| type | choice |
| dimKey | fc |

| zh | en |
| --- | --- |
| 新闻说“每天喝咖啡的人更长寿”，你第一反应更像—— | A news story says, "People who drink coffee every day live longer." Your first reaction is more like— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 先看研究怎么做的，再说信不信。 | First look at how the study was done, then decide whether to believe it. | fc:2 | science:2 |
| B | 是不是漏掉了别的关键因素。 | Could some other key factor have been left out? | fc:1 | science:1, economics:1 |
| C | 每个人生活都不一样，这种结论太容易一刀切。 | Everyone lives differently. This kind of conclusion cuts across people too crudely. | fc:-1 | humanities:1 |
| D | “更长寿”放在不同语境里意思都不一样。 | "Live longer" means different things in different contexts. | fc:-2 | humanities:2 |

## Q20

| field | value |
| --- | --- |
| type | choice |
| dimKey | fc |

| zh | en |
| --- | --- |
| 复盘一个失败项目时，你最相信哪类材料—— | When reviewing a failed project, what kind of material do you trust most— |

| option | zh | en | dimDelta | spec |
| --- | --- | --- | --- | --- |
| A | 时间线、数据和关键决策点。 | Timelines, data, and key decision points. | fc:2 | science:1, engineering:1 |
| B | 当时哪些判断后来被事实打脸了。 | Which judgments were later disproven by reality. | fc:1 | science:1, engineering:1 |
| C | 参与的人当时在什么处境里做决定。 | What situation the participants were in when they made those decisions. | fc:-1 | humanities:1 |
| D | 很多失败就是情境造成的，未必能总结成固定模型。 | Many failures are caused by context and may not summarize into a stable model at all. | fc:-2 | humanities:2 |

