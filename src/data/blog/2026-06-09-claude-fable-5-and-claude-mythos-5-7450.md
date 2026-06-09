---
title: "Claude Fable 5와 Claude Mythos 5 공개"
slug: "claude-fable-5-and-claude-mythos-5-7450"
pubDatetime: 2026-06-09T17:03:39Z
description: "Anthropic이 지금까지 일반 공개한 모델 중 가장 성능이 높은 Mythos급 모델 'Fable 5'와, 사이버 방어자용으로 안전장치를 일부 푼 'Mythos 5'를 동시에 내놨다."
tags: ["claude", "fable_5", "mythos_5", "anthropic", "ai_model"]
featured: false
draft: false
---

<img src="/covers/7450.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 지금까지 일반 공개한 모델 중 가장 성능이 높은 Mythos급 모델 'Fable 5'와, 사이버 방어자용으로 안전장치를 일부 푼 'Mythos 5'를 동시에 내놨다.

## 📌 무엇이 바뀌었나
- Fable 5는 Mythos급 모델에 일반 사용을 위한 안전장치를 입힌 버전으로, 소프트웨어 엔지니어링·지식 노동·비전·과학 연구 등 거의 모든 벤치마크에서 SOTA를 기록한다. 작업이 길고 복잡할수록 기존 모델 대비 격차가 커진다.
- Mythos 5는 Fable 5와 같은 기반 모델이되 일부 영역의 안전장치를 해제한 버전으로, 미국 정부와 협업하는 Project Glasswing을 통해 사이버 방어자·인프라 사업자 등 소수에게만 제공된다(Claude Mythos Preview 업그레이드).
- 가격은 입력 100만 토큰당 $10, 출력 100만 토큰당 $50으로, Mythos Preview의 절반 이하다.

## 🛠️ 어떻게 쓰는가
실제 성능 사례로는 Stripe가 5천만 줄 규모 Ruby 코드베이스의 전면 마이그레이션을 사람 팀이 두 달 넘게 걸릴 일을 하루 만에 끝냈다고 보고했다. Cognition의 FrontierCode, Hebbia 금융 벤치마크에서 최고점을 받았고, 비전 작업에서는 스크린샷만으로 웹앱 소스코드를 복원하거나 별도 보조 도구 없이 포켓몬 FireRed를 클리어했다. 메모리 측면에서는 파일 기반 영속 메모리를 줬을 때 Slay the Spire 성능이 Opus 4.8보다 3배 더 개선됐다.

## 💼 누가 써야 하나
장기 실행·고난도 에이전트 코딩, 금융/거래 분석, 과학 연구(단백질 설계·분자생물학 가설 생성·유전체학)를 다루는 개발자와 연구자가 주 대상이며, Mythos 5는 사이버 방어자·핵심 인프라 사업자로 접근이 제한된다.

## ⚠️ 주의사항
Fable 5는 사이버보안 등 위험 영역 질의에 대해 분류기가 작동하면 차상위 모델인 Claude Opus 4.8이 대신 응답하도록 안전장치가 걸려 있다. 보수적으로 튜닝돼 있어 무해한 요청도 걸릴 수 있으나, 평균적으로 세션의 5% 미만에서만 작동한다고 한다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-fable-5-mythos-5> (anthropic_claude_blog) · 발행일: 2026-06-09*
