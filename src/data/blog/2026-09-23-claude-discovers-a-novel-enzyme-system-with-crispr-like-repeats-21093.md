---
title: "Claude, CRISPR와 비슷한 반복 서열을 가진 새로운 효소 시스템 발견"
slug: "claude-discovers-a-novel-enzyme-system-with-crispr-like-repeats-21093"
pubDatetime: 2026-09-23T18:00:53Z
description: "Anthropic이 생명과학 연구 그룹과 자체 실험실을 새로 공개했어요. 과학자들이 방향만 크게 잡아주고 나머지는 Claude 에이전트들이 스스로 찾아냈는데, 그 결과가 CRISPR를 떠올리게 하는 새 효소 시스템 ART(array-associated reverse…"
tags: ["anthropic", "claude", "life_sciences", "crispr", "ai_agents"]
featured: false
draft: false
---

<img src="/covers/21093.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 생명과학 연구 그룹과 자체 실험실을 새로 공개했어요. 과학자들이 방향만 크게 잡아주고 나머지는 Claude 에이전트들이 스스로 찾아냈는데, 그 결과가 CRISPR를 떠올리게 하는 새 효소 시스템 ART(array-associated reverse transcriptases)예요.

## 📌 무엇이 바뀌었나
- 2026년 봄에 꾸려진 Anthropic 생명과학 연구 그룹이 첫 성과를 공개했어요(2026년 9월 23일). DNA 데이터셋을 뒤져 기능이 알려지지 않은 단백질 계열을 찾고, 가설을 대량으로 만든 뒤 실험실에서 검증하는 방식이에요.
- 약 950개의 Claude 에이전트가 21시간 동안 토큰 2억 1천만 개를 써서 역전사효소(RT) 20만 개 이상을 모았어요. 여기서 새 후보 시스템 3,500개를 골라내고, 가장 유력한 20개는 사람이 읽을 수 있는 보고서로 정리했어요. 전문가가 하면 몇 주에서 몇 달 걸리는 분석이라고 해요.
- 이렇게 찾은 ART는 주로 박테리오파지에서 발견되고 세 부분으로 되어 있어요. RT 유전자, 그 옆의 파트너 유전자, 그리고 일정한 간격으로 길게 늘어선 DNA 반복 배열이에요. 반복 배열의 구조가 CRISPR 배열과 닮았어요.
- RT 자체는 jumbo phage에서 이미 보고된 적이 있어요. 다만 옆에 붙은 비암호화 반복 배열과 기능 미상의 보조 단백질을 알아챈 건 Claude가 처음인 것으로 보여요. 첫 실험에서는 ART 배열이 서로 다른 짧은 RNA들로 발현되는 것도 확인했어요.

## 🛠️ 어떻게 쓰는가
연구진이 한 일은 처음 프롬프트를 주는 것과 실험실 작업뿐이었어요. 후보 탐색과 판단은 Claude 에이전트들이 알아서 했어요. 일반적인 흐름은 이래요. Claude가 관련 문헌을 읽고, 공개 데이터로 기존 결과를 재현해서 방법이 맞는지 먼저 확인해요. 그다음 기존 시스템에 들어맞지 않는 후보를 찾아 보고서를 쓰고, 증거를 스스로 비판적으로 검토해 대부분의 후보를 걸러내요. 도구는 누구나 쓸 수 있는 Claude Science와 Claude Code를 썼고, 때로는 여러 Claude 세션을 병렬로 돌리는 자체 하네스도 함께 썼어요. 한 캠페인에서 후보 보고서가 수백에서 수천 개씩 나오기 때문에, 어떤 가설이 테스트할 가치가 있는지 분석한 결과를 다시 지시문에 반영해 연구진의 과학적 판단 기준을 Claude가 따라 하도록 가르치고 있대요.

## 💼 누가 써야 하나
게놈 마이닝, 단백질 발굴, 유전자 편집 도구를 연구하는 생명과학자에게 특히 참고할 만한 사례예요. Anthropic은 유전체학을 비롯한 여러 분야에서 연구 질문을 제안해 줄 과학자들과 협업하고 싶다고 밝혔어요. CRISPR 개척자인 Feng Zhang 교수(MIT·Broad Institute)는 프리프린트를 검토한 뒤 이 발견이 정말 흥미롭고 추가 연구할 가치가 있다고 평가했어요.

## ⚠️ 주의사항
ART가 정확히 무슨 기능을 하는지는 아직 몰라요. 추가 실험이 진행 중이고, 이번 발표는 프리프린트 단계의 초기 결과예요. 실험실은 Bay Area에 있고 BSL-1/BSL-2 수준의 연구만 해요. 사람을 감염시키는 병원체는 다루지 않고, 실험은 모두 사람 과학자가 직접 수행해요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-discovers-novel-enzyme-system> (anthropic_claude_blog) · 발행일: 2026-09-23*
