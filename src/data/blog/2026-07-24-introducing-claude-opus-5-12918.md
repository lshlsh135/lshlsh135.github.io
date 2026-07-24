---
title: "Claude Opus 5 소개"
slug: "introducing-claude-opus-5-12918"
pubDatetime: 2026-07-24T16:56:29Z
description: "Anthropic이 2026년 7월 24일 Claude Opus 5를 공개했는데, Fable 5에 가까운 프런티어급 지능을 절반 가격에 제공하면서 Opus 4.8과 동일한 비용으로 코딩·에이전트 성능을 크게 끌어올린 모델이에요."
tags: ["claude_opus_5", "anthropic", "llm", "benchmark", "ai_agent"]
featured: false
draft: false
---

<img src="/covers/12918.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 2026년 7월 24일 Claude Opus 5를 공개했는데, Fable 5에 가까운 프런티어급 지능을 절반 가격에 제공하면서 Opus 4.8과 동일한 비용으로 코딩·에이전트 성능을 크게 끌어올린 모델이에요.

## 📌 무엇이 바뀌었나
- Frontier-Bench v0.1에서 모든 모델을 제치고 새 최고 기록을 세웠고, Opus 4.8 대비 성능이 2배 이상인데 태스크당 비용은 오히려 낮아요. CursorBench 3.2 max effort에서는 Fable 5 최고 점수의 0.5% 이내를 절반 비용으로 달성했어요.
- ARC-AGI 3에서 차순위 모델의 3배 점수, Zapier AutomationBench 통과율은 같은 비용 기준 약 1.5배, OSWorld 2.0(컴퓨터 사용 벤치마크)에서는 Fable 5 최고 기록을 약 1/3 비용으로 넘어섰어요.
- 생명과학 쪽도 개선돼서 유기화학(분광 데이터로 분자 구조 추론)에서 Opus 4.8보다 10.2%p, 단백질 서열 변이 기능 예측에서 7.7%p 높게 나왔고, 자기 작업을 검증하며 끝까지 반복하는 성향이 강해졌어요. 예를 들어 도면을 직접 볼 수 없는 조건의 FreeCAD 3D 모델링 과제에서 자체 컴퓨터 비전 파이프라인을 짜서 픽셀에서 형상을 뽑아내 반복적으로 성공했어요.

## 🛠️ 어떻게 쓰는가
오늘부터 바로 사용 가능하고, Claude Max에서는 새 기본 모델, Claude Pro에서는 가장 강한 모델로 제공돼요. 가격은 전작 Opus 4.8과 동일하고, effort 설정을 조절해서 지능을 최대로 쓸지, 토큰을 아껴 더 빠르고 저렴하게 쓸지 고를 수 있어요. Zapier 벤치마크에서는 가장 낮은 effort 설정에서도 다른 어떤 모델보다 많은 태스크를 통과했다고 해요.

## 💼 누가 써야 하나
장시간 돌아가는 에이전트, 어려운 디버깅·근본 원인 분석, 재무·법률·과학 분석 같은 전문 업무에 맞는 모델이에요. Devin, Cursor, Zapier, Lovable, Box, JetBrains 등 얼리액세스 파트너들이 Opus 4.8 대비 정확도·일관성·토큰 효율 개선을 보고했어요.

## ⚠️ 주의사항
사이버보안 태스크에서는 여전히 Mythos 5에 뒤처지며, Anthropic은 의도적으로 사이버 태스크 학습을 배제했다고 해요(취약점 발견은 Mythos 5에 근접하지만 이를 실제 위협으로 만드는 익스플로잇 단계는 상당히 뒤처짐). 한편 자동 행동 감사에서 misaligned behavior 점수 2.3으로 역대 Anthropic 모델 중 가장 정렬이 잘 된 모델로 평가됐어요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-opus-5> (anthropic_claude_blog) · 발행일: 2026-07-24*
