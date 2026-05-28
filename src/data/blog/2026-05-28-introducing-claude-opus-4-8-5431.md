---
title: "Claude Opus 4.8 공개 — Opus 4.7 후속, 같은 가격에 코딩·에이전트 성능 강화"
slug: "introducing-claude-opus-4-8-5431"
pubDatetime: 2026-05-28T16:48:28Z
description: "Anthropic이 2026년 5월 28일 Opus 4.7 후속인 Claude Opus 4.8을 같은 가격(입력 $5 / 출력 $25 per 1M tokens)으로 출시했고, 동적 워크플로우·effort 컨트롤 등 부가 기능도 함께 풀렸다."
tags: ["claude_opus_4_8", "anthropic", "claude_code", "ai_agents", "llm"]
featured: false
draft: false
---

<img src="/covers/5431.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 2026년 5월 28일 Opus 4.7 후속인 Claude Opus 4.8을 같은 가격(입력 $5 / 출력 $25 per 1M tokens)으로 출시했고, 동적 워크플로우·effort 컨트롤 등 부가 기능도 함께 풀렸다.

## 📌 무엇이 바뀌었나
- Opus 4.7 대비 코딩·에이전트·전문 업무 벤치마크 전반에서 점수 상승, 가격은 동일 유지(fast mode는 이전 모델 대비 3배 저렴해져 입력 $10 / 출력 $50 per 1M tokens).
- 정직성(honesty) 개선: 자기 작성 코드의 결함을 짚지 않고 넘어가는 비율이 이전 모델 대비 약 1/4 수준으로 줄었다고 자체 평가.
- 얼라인먼트 평가에서 misaligned behavior 비율이 Opus 4.7보다 크게 낮고, 사내 최고 정렬 모델인 Claude Mythos Preview 수준에 근접.
- 동시 출시 기능 3종: Claude Code의 'dynamic workflows'(리서치 프리뷰, 한 세션에서 수백 개 서브에이전트를 병렬로 굴리는 모드), claude.ai/Cowork의 effort 컨트롤(모델 셀렉터 옆에 응답 깊이 조절 슬라이더 추가, 전 플랜 제공), Messages API에서 messages 배열 안에 system 엔트리를 받도록 확장(프롬프트 캐시 깨지 않고 도중에 지시 갱신 가능).
- 외부 파트너 인용: Cursor(CursorBench 전 effort 레벨에서 4.7 상회), Devin(comment-verbosity·tool-calling 회귀 해소), Databricks Genie(Opus 4.7 대비 토큰 비용 61% 절감 멀티모달), Hebbia(citation 정밀도 향상), Thomson Reuters CoCounsel Legal, Online-Mind2Web 84%(브라우저 에이전트 GPT-5.5 상회).

## 🛠️ 어떻게 쓰는가
API 모델 ID는 `claude-opus-4-8` 한 가지로, 오늘부로 모든 채널에서 사용 가능. Opus 4.8은 기본값이 high effort이며, 더 어려운 작업이나 장기 비동기 워크플로우에는 'extra'(Claude Code에서는 'xhigh') 또는 'max' 선택이 권장된다. Claude Code의 rate limit은 상위 effort 토큰 사용량을 감안해 상향되었고, dynamic workflows는 Enterprise·Team·Max 플랜의 Claude Code에서 쓸 수 있다.

## 💼 누가 써야 하나
장기 실행 에이전트(법률·금융 분석·번역·딥리서치·슬라이드 빌더), 대규모 코드베이스 마이그레이션을 자동화하려는 엔지니어링 팀, computer-use/브라우저 에이전트 제품을 만드는 곳이 1순위 대상이다. 단순 채팅용이라면 4.7 대비 체감 폭은 'modest but tangible' 수준이라고 본문이 직접 표현.

## ⚠️ 주의사항
Project Glasswing의 'Mythos-class' 차세대 모델은 사이버보안 세이프가드 작업이 끝난 뒤 몇 주 안에 일반 공개 예정이라 Opus 4.8이 잠시 톱 라인이다. 기본 effort가 high로 올라간 만큼 4.7과 같은 프롬프트라도 토큰 사용량과 응답 시간이 늘 수 있으니 비용에 민감하면 effort를 명시적으로 낮춰서 쓰는 게 안전하다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-opus-4-8> (anthropic_claude_blog) · 발행일: 2026-05-28*
