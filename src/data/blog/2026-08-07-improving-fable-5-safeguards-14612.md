---
title: "Fable 5 세이프가드 개선"
slug: "improving-fable-5-safeguards-14612"
pubDatetime: 2026-08-07T02:18:43Z
description: "Anthropic이 Claude Fable 5의 생물학 세이프가드를 개선해, 생물학 관련 질문 시 하위 모델로 전환되는 '폴백(fallback)'을 약 85% 줄였어요."
tags: ["anthropic", "claude_fable_5", "biology", "safeguards", "classifier"]
featured: false
draft: false
---

<img src="/covers/14612.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 Claude Fable 5의 생물학 세이프가드를 개선해, 생물학 관련 질문 시 하위 모델로 전환되는 '폴백(fallback)'을 약 85% 줄였어요.

## 📌 무엇이 바뀌었나
- Fable 5의 세이프가드는 안전 분류기(classifier)가 위험 질의를 감지하면 요청을 Opus 5로 재라우팅하는 방식인데, 출시 당시에는 거의 모든 생물학 질문을 차단할 정도로 범위가 넓었습니다.
- 이번에 분류기의 '헌법(constitution)' 규칙을 다시 작성하고, 내·외부 전문가 피드백을 반영한 새 학습 데이터로 재훈련해 무해한 질문을 훨씬 덜 차단하게 됐습니다.
- 그 결과 검사 결과 해석, 증상 이해, 생물학 학습 같은 일상적·교육적 질문에서 폴백이 크게 줄어듭니다.
- 전체 폴백 감소 효과는 Claude.ai 약 67%, Cowork 55%, Claude Code 17%, Claude Platform 7% 수준으로 예상됩니다.

## 💼 누가 써야 하나
일반 사용자의 건강·교육 관련 질문은 물론, 의료 전문가의 임상 업무 지원까지 Fable 5에서 더 원활해집니다.

## ⚠️ 주의사항
바이러스학, 독성학, 분자 설계처럼 이중용도(dual-use)로 분류되는 요청은 여전히 Opus 5로 폴백되므로, 전문 생물학 연구나 신약 개발 용도로는 아직 쓸 수 없습니다. Anthropic은 이런 프런티어 생물학 기능을 위해 '신뢰 기반 접근(trusted access)' 경로를 마련하겠다고 밝혔습니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards> (anthropic_claude_blog) · 발행일: 2026-08-07*
