---
title: "Claude Code를 만들며 배운 교훈: 프롬프트 캐싱이 전부다"
slug: "lessons-from-building-claude-code-prompt-caching-is-everything-1096"
pubDatetime: 2026-04-30T00:00:00Z
description: "Claude Code 팀이 장시간 돌아가는 에이전트의 비용·지연을 잡기 위해 하네스 전체를 프롬프트 캐싱 중심으로 설계하면서 얻은, 종종 직관에 어긋나는 교훈들을 정리한 글이다."
tags: ["claude_code", "prompt_caching", "agent", "anthropic", "compaction"]
featured: false
draft: false
---

<img src="/covers/1096.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Claude Code 팀이 장시간 돌아가는 에이전트의 비용·지연을 잡기 위해 하네스 전체를 프롬프트 캐싱 중심으로 설계하면서 얻은, 종종 직관에 어긋나는 교훈들을 정리한 글이다.

## 📌 무엇이 바뀌었나
- 프롬프트 캐싱은 '프리픽스 매칭'이다. 요청 시작부터 cache_control 브레이크포인트까지가 캐시 단위라, 앞쪽에서 한 글자라도 바뀌면 그 뒤 전체 캐시가 무효화된다.
- 캐시 적중률을 가동률(uptime)처럼 모니터링한다. Claude Code 팀은 캐시 적중률에 알림을 걸고, 너무 낮으면 SEV(장애)로 선언한다.
- 캐시는 모델별로 따로 존재한다. 100k 토큰 대화 중간에 Opus → Haiku로 바꾸면, 쉬운 질문이라도 Haiku용 캐시를 새로 쌓아야 해서 오히려 더 비싸질 수 있다.

## 🛠️ 어떻게 쓰는가
프롬프트는 정적인 것 → 동적인 것 순으로 배치한다. Claude Code의 경우 ① 정적 시스템 프롬프트 & 툴 정의(전역 캐시), ② CLAUDE.md(프로젝트 단위 캐시), ③ 세션 컨텍스트(세션 단위 캐시), ④ 대화 메시지 순이다. 시간 같은 동적 정보를 시스템 프롬프트에 박거나 툴 순서를 비결정적으로 섞으면 캐시가 깨지므로, 업데이트는 다음 user 메시지나 tool result에 태그로 끼워 넣는 식으로 처리한다. Plan Mode도 툴셋을 바꾸지 않고 EnterPlanMode/ExitPlanMode 자체를 툴로 두어 토글한다 — 시스템 메시지로 "plan mode다, 파일 편집 금지, 끝나면 ExitPlanMode 호출"을 알려주는 방식이다. MCP 툴이 많을 때는 제거 대신 defer_loading: true 스텁만 항상 같은 순서로 노출하고, 모델이 tool search로 "발견"할 때 전체 스키마를 로드한다.

컴팩션(요약)도 별도 시스템 프롬프트로 빈 툴셋 호출을 만들면 프리픽스가 어긋나 전체 대화를 미캐시 단가로 다시 내야 한다. 해법은 'cache-safe forking' — 부모 대화와 동일한 시스템 프롬프트·툴 정의·컨텍스트를 그대로 두고, 마지막에 compaction 프롬프트만 새 user 메시지로 덧붙인다. 대신 컨텍스트 윈도에 요약 출력이 들어갈 'compaction buffer'를 미리 비워둬야 한다. 이 패턴은 Anthropic API에 컴팩션 기능으로 내장되어 있어 직접 구현하지 않고도 쓸 수 있다.

## 💼 누가 써야 하나
장시간 돌아가는 에이전트나 코딩 어시스턴트를 자체 하네스로 만드는 개발자, MCP 툴을 다수 붙여 운영하는 팀, 그리고 비용·레이트리밋이 캐시 적중률에 직결되는 SaaS 에이전트 운영자에게 직접적으로 유용하다.

## ⚠️ 주의사항
세션 중간에 툴을 추가/삭제하거나 모델을 갈아끼우는 것이 가장 흔한 캐시 파괴 원인이다. 모델 전환이 필요하면 부모 세션은 두고 서브에이전트를 띄워 'hand-off' 메시지를 준비시키는 식으로 격리하라(Claude Code의 Explore 에이전트가 Haiku를 이렇게 쓴다). 글은 2026년 4월 30일자, 저자 Thariq Shihipar.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything> (anthropic_claude_blog) · 발행일: 2026-04-30*
