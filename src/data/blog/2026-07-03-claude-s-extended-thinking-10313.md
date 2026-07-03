---
title: "Claude의 확장 사고(extended thinking)"
slug: "claude-s-extended-thinking-10313"
pubDatetime: 2026-07-03T10:15:42Z
description: "Claude 3.7 Sonnet에 '확장 사고 모드'가 추가되어, 같은 모델이 더 어려운 문제에 더 많은 시간과 연산을 쓰도록 켜고 끌 수 있게 됐고 그 사고 과정을 그대로 볼 수 있습니다."
tags: ["claude", "extended_thinking", "anthropic"]
featured: false
draft: false
---

<img src="/covers/10313.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Claude 3.7 Sonnet에 '확장 사고 모드'가 추가되어, 같은 모델이 더 어려운 문제에 더 많은 시간과 연산을 쓰도록 켜고 끌 수 있게 됐고 그 사고 과정을 그대로 볼 수 있습니다.

## 📌 무엇이 바뀌었나
- 사용자는 '확장 사고 모드'를 on/off로 토글할 수 있고, 개발자는 'thinking budget'을 설정해 Claude가 문제에 쓰는 시간을 정밀하게 제어할 수 있습니다.
- 별도 모델로 전환하는 게 아니라, 동일한 모델에게 더 많은 시간·노력을 주는 방식입니다.
- Claude의 사고 과정(thought process)을 가공하지 않은 raw 형태로 공개합니다(현재는 리서치 프리뷰).

## 🛠️ 어떻게 쓰는가
확장 사고는 순차적(serial) 추론 단계를 늘리는 'serial test-time compute'로, 예컨대 수학 문제 정확도가 'thinking token' 수에 따라 로그 함수적으로 향상됩니다(2024 AIME 기준). 별도로 연구팀은 병렬(parallel) test-time compute도 실험 중인데, 독립적인 여러 사고 과정을 샘플링해 다수결(majority/consensus voting)이나 별도 채점 모델(scoring model)로 최선을 고르는 방식입니다. GPQA에서 256개 독립 샘플·학습된 채점 모델·최대 64k 토큰 예산을 쓰면 84.8%(물리 서브스코어 96.5%)를 기록했으나, 병렬 방식은 이번 배포 모델에는 포함되지 않았습니다.

## 💼 누가 써야 하나
복잡한 디버깅·수학·과학처럼 깊은 추론이 필요한 작업을 다루는 사용자, 그리고 반복적으로 함수를 호출하며 오픈엔드 작업을 끝까지 수행하는(computer use, OSWorld, 심지어 Pokémon Red 플레이) AI 에이전트를 만드는 개발자에게 유용합니다.

## ⚠️ 주의사항
공개된 사고 과정은 character training을 거치지 않아 덜 개성적이고, 중간에 틀리거나 어설픈 생각이 섞일 수 있으며, 'faithfulness'(사고 내용이 실제 모델 내부를 반영하는지)가 보장되지 않아 안전성 판단 근거로 삼기 어렵습니다. 또한 악의적 사용자가 이를 탈옥에 악용할 수 있다는 우려가 있습니다. 안전 등급은 현행 ASL-2가 적절하다고 확인됐으나 CBRN 관련 일부 능력 향상(uplift)이 관찰됐습니다(단 모든 시도에 치명적 실패가 있어 성공은 저지됨).

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/visible-extended-thinking> (anthropic_claude_blog) · 발행일: 2026-07-03*
