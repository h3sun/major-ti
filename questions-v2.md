# Major-TI Question Bank v2

适用页面：
- `v2.html`

编辑规则：
- 一道题就是一个 `## Q编号` 区块。
- `meta` 表里只改 `type` 和 `dimKey`。
- 当前 `v2` 全部使用 `stance`。
- `dimKey` 使用：`mn` / `sr` / `iv` / `ec`
- `dimDelta` 写成 `mn:2` 这种形式；多个值用英文逗号分隔。
- `spec` 写成 `engineering:1, economics:1` 这种形式；没有就留空。
- 改完后运行：`node sync-questions.js`

## Q1

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| text |
| --- |
| 一件事反复出问题时，我会先想它到底是怎么一步步变成这样的。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:2 | science:1, engineering:1 |
| neutral | mn:0 |  |
| oppose | mn:-2 | humanities:1 |

## Q2

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| text |
| --- |
| 同一件事换个人来讲时，我很在意它的意思是不是已经变了。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:-2 | humanities:2, law:1 |
| neutral | mn:0 |  |
| oppose | mn:2 | science:1, engineering:1 |

## Q3

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| text |
| --- |
| 遇到复杂的事，我会先找里面最关键的那个原因。 |

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

| text |
| --- |
| 讨论陷入僵局时，我会先确认大家说的是不是同一个意思。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:-2 | humanities:2, law:1 |
| neutral | mn:0 |  |
| oppose | mn:2 | engineering:1, science:1 |

## Q5

| field | value |
| --- | --- |
| type | stance |
| dimKey | mn |

| text |
| --- |
| 听到一个说法时，我更容易先追问“它为什么会这样”，而不是“大家怎么看它”。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | mn:2 | engineering:1, economics:1 |
| neutral | mn:0 |  |
| oppose | mn:-2 | humanities:2 |

## Q6

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| text |
| --- |
| 一件小事总是做不好时，我第一反应是把流程重新理顺。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:2 | engineering:2 |
| neutral | sr:0 |  |
| oppose | sr:-2 | law:2 |

## Q7

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| text |
| --- |
| 事情搞砸时，我第一反应是先看这件事该谁负责。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:-2 | law:2 |
| neutral | sr:0 |  |
| oppose | sr:2 | engineering:2 |

## Q8

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| text |
| --- |
| 同样的问题老是反复出现，我宁愿重做流程，也不想一直靠提醒。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:2 | engineering:2, economics:1 |
| neutral | sr:0 |  |
| oppose | sr:-2 | law:1 |

## Q9

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| text |
| --- |
| 规则没写清楚时，我很难放心把事情往下推进。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:-2 | law:2 |
| neutral | sr:0 |  |
| oppose | sr:2 | engineering:1 |

## Q10

| field | value |
| --- | --- |
| type | stance |
| dimKey | sr |

| text |
| --- |
| 一个流程老被人钻空子时，我更想直接把漏洞堵上。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | sr:2 | engineering:2 |
| neutral | sr:0 |  |
| oppose | sr:-2 | law:2 |

## Q11

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| text |
| --- |
| 听别人讲一件事时，我常会下意识想：最后是谁更占便宜。 |

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

| text |
| --- |
| 一个办法就算更省事，只要我觉得不太对，我也会犹豫要不要用。 |

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

| text |
| --- |
| 看到有人走捷径获利时，我会先担心老实人以后会越来越吃亏。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:2 | economics:2, law:1 |
| neutral | iv:0 |  |
| oppose | iv:-2 | humanities:1 |

## Q14

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| text |
| --- |
| 一个办法再有效，只要它会让人越来越只盯结果，我就会警惕。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:-2 | humanities:2, law:1 |
| neutral | iv:0 |  |
| oppose | iv:2 | economics:1, engineering:1 |

## Q15

| field | value |
| --- | --- |
| type | stance |
| dimKey | iv |

| text |
| --- |
| 一有奖励，我就会下意识想大家会不会开始只冲着奖励去。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | iv:2 | economics:2 |
| neutral | iv:0 |  |
| oppose | iv:-2 | humanities:2 |

## Q16

| field | value |
| --- | --- |
| type | stance |
| dimKey | ec |

| text |
| --- |
| 听到一个说法时，我常会先想：它是靠什么证明自己的？ |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | ec:2 | science:2 |
| neutral | ec:0 |  |
| oppose | ec:-2 | humanities:1 |

## Q17

| field | value |
| --- | --- |
| type | stance |
| dimKey | ec |

| text |
| --- |
| 很多事情一旦被量化打分，最重要的东西反而会看不见。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | ec:-2 | humanities:2 |
| neutral | ec:0 |  |
| oppose | ec:2 | science:1, engineering:1 |

## Q18

| field | value |
| --- | --- |
| type | stance |
| dimKey | ec |

| text |
| --- |
| 比起一个特别打动人的例子，我更信反复出现的数据模式。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | ec:2 | science:2, engineering:1 |
| neutral | ec:0 |  |
| oppose | ec:-2 | humanities:1 |

## Q19

| field | value |
| --- | --- |
| type | stance |
| dimKey | ec |

| text |
| --- |
| 看到“研究说……”这样的结论时，我会先想这个研究靠不靠谱。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | ec:2 | science:2 |
| neutral | ec:0 |  |
| oppose | ec:-2 | humanities:2 |

## Q20

| field | value |
| --- | --- |
| type | stance |
| dimKey | ec |

| text |
| --- |
| 一段关系突然变远时，我不太相信一定能说清楚到底是哪一步开始变的。 |

| stance | dimDelta | spec |
| --- | --- | --- |
| support | ec:-2 | humanities:2 |
| neutral | ec:0 |  |
| oppose | ec:2 | science:1, engineering:1 |
