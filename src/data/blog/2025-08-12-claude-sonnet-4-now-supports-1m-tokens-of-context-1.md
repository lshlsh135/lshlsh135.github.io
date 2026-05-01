---
title: "Claude Sonnet 4, 이제 100만 토큰 컨텍스트 지원"
slug: "claude-sonnet-4-now-supports-1m-tokens-of-context-1"
pubDatetime: 2025-08-12T00:00:00Z
description: "Claude Sonnet 4의 컨텍스트 윈도우가 기존 대비 5배 늘어난 최대 100만(1M) 토큰까지 확장돼, 코드베이스 전체나 수백 건의 문서를 한 번에 다룰 수 있게 됐어요."
tags: ["claude", "anthropic", "long_context", "llm_api"]
featured: false
draft: false
---

<img src="/covers/1.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Claude Sonnet 4의 컨텍스트 윈도우가 기존 대비 5배 늘어난 최대 100만(1M) 토큰까지 확장돼, 코드베이스 전체나 수백 건의 문서를 한 번에 다룰 수 있게 됐어요.

## 📌 무엇이 바뀌었나
- Anthropic API에서 Claude Sonnet 4가 1M 토큰 컨텍스트를 퍼블릭 베타로 지원해요. 75,000줄 이상의 코드나 수십 편의 논문을 한 요청에 넣을 수 있는 규모예요.
- Amazon Bedrock과 Google Cloud Vertex AI에서도 동일하게 사용할 수 있어요(Vertex AI는 8월 26일 추가 지원).
- Claude Developer Platform에서는 Tier 4 및 커스텀 rate limit 고객부터 우선 열리고, 이후 몇 주에 걸쳐 점진적으로 확대된다고 해요.

## 🛠️ 어떻게 쓰는가
주요 활용 시나리오는 세 가지예요. 첫째, 대규모 코드 분석 — 소스/테스트/문서를 통째로 올려 프로젝트 아키텍처와 파일 간 의존성을 파악하고 개선안을 받는 용도. 둘째, 문서 합성 — 법률 계약서, 연구 논문, 기술 명세 같은 방대한 문서 셋의 관계를 끊김 없이 분석하는 용도. 셋째, 컨텍스트 인지형 에이전트 — 수백 번의 tool call과 멀티스텝 워크플로 동안 API 문서·툴 정의·상호작용 이력을 모두 유지하는 에이전트 구축. 비용 부담을 줄이려면 prompt caching이나 batch processing(추가 50% 절감)과 결합해 쓰는 게 권장돼요.

## 💼 누가 써야 하나
전체 코드베이스를 한 번에 이해시켜야 하는 코딩 에이전트 개발자(Bolt.new, iGent AI의 Maestro 같은 사례), 또는 수백 건의 장문 문서를 횡단 분석해야 하는 리서치·법무·기술문서 팀에 적합해요.

## ⚠️ 주의사항
200K 토큰을 넘는 프롬프트는 가격이 올라가요. 200K 이하는 입력 $3 / 출력 $15 per MTok이지만, 200K 초과 구간에서는 입력 $6 / 출력 $22.50 per MTok으로 두 배가 돼요. 또한 처음부터 모두에게 열리는 게 아니라 Tier 4·커스텀 rate limit 고객 우선 베타라는 점, 그리고 게시 시점 기준으로는 API·Bedrock·Vertex AI 한정이고 다른 Claude 제품으로의 확장은 검토 단계라는 점에 유의해야 해요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/1m-context> (anthropic_claude_blog) · 발행일: 2025-08-12*
