---
title: "Claude Fable 5 재배포"
slug: "redeploying-claude-fable-5-10087"
pubDatetime: 2026-07-01T03:08:48Z
description: "6월 12일 미국 수출통제로 중단됐던 Claude Fable 5가 규제 해제에 따라 7월 1일부터 전 세계에 다시 제공되며, 사이버보안 안전장치가 강화됐다."
tags: ["anthropic", "claude_fable_5", "ai_safety"]
featured: false
draft: false
---

<img src="/covers/10087.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: 6월 12일 미국 수출통제로 중단됐던 Claude Fable 5가 규제 해제에 따라 7월 1일부터 전 세계에 다시 제공되며, 사이버보안 안전장치가 강화됐다.

## 📌 무엇이 바뀌었나
- 6월 12일 미국 정부가 Fable 5와 Mythos 5에 수출통제를 걸어 외국 국적자 접근 제한이 요구됐고, 실시간 국적 확인이 불가능해 전 사용자 대상으로 두 모델을 중단했다. 6월 30일 통제가 해제되면서 7월 1일부터 Fable 5가 재개된다.
- 재개 범위는 Claude Platform, Claude.ai, Claude Code, Claude Cowork이며, AWS·Google Cloud·Microsoft Foundry는 순차 복구 예정이다.
- 발단은 Amazon 연구진이 Fable 5의 안전장치를 우회해 소프트웨어 취약점을 식별시키고(한 사례에선 익스플로잇 시연 코드까지 생성) 정부에 보고한 건이었다.

## 🛠️ 어떻게 쓰는가
Pro·Max·Team 및 일부 Enterprise 플랜에서는 7월 7일까지 주간 사용량 한도의 최대 50%까지 Fable 5가 포함되고, 이후에는 usage credit으로 이용한다. Anthropic은 정부와 협력해 보고된 우회 행위를 겨냥·차단하는 개선된 안전 분류기(safety classifier)를 학습시켰고, 요청이 차단되면 사용자에게 알림이 뜨고 해당 요청은 Opus 4.8로 넘어간다. 이 분류기로 Amazon 보고서의 특정 기법은 99% 이상 차단된다.

## 💼 누가 써야 하나
일반 사용자 대상의 Fable 5(강한 안전장치 적용)와, 방어적 사이버보안 용도로 소수 Project Glasswing 파트너에게만 제공되는 Mythos 5(안전장치 적음)로 나뉜다. 두 모델은 동일한 기반 모델을 공유한다.

## ⚠️ 주의사항
검증 결과 보고된 취약점 식별·시연은 Opus 4.8, GPT-5.5, Kimi K2.7 등 덜 유능한 모델들도 재현 가능한 경계 사례였고 Mythos급 고유 공격 능력은 없었다. 다만 새 분류기는 일상적 코딩·디버깅 중 정상 요청을 오탐(false positive)으로 더 자주 막는 대가가 있으며, Anthropic은 Amazon·Microsoft·Google 등 Glasswing 파트너와 jailbreak 심각도 평가를 위한 공통 산업 프레임워크를 마련 중이다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/redeploying-fable-5> (anthropic_claude_blog) · 발행일: 2026-07-01*
