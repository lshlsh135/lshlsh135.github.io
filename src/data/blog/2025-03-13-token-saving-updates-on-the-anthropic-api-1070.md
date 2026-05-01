---
title: "Anthropic API 토큰 절약 업데이트: 캐시 인식 레이트 리밋·간소화된 프롬프트 캐싱·토큰 효율적 도구 사용"
slug: "token-saving-updates-on-the-anthropic-api-1070"
pubDatetime: 2025-03-13T00:00:00Z
description: "Anthropic API에 토큰 사용량을 줄이고 처리량을 높이는 세 가지 업데이트가 추가됐어요 첫째, 캐시 인식 레이트 리밋(cache-aware rate limits)이 도입돼 캐시된 프롬프트가 레이트 리밋 계산에 더 유리하게 반영됩니다"
tags: ["anthropic", "claude", "prompt_caching", "api", "tool_use"]
featured: false
draft: false
---

<img src="/covers/1070.png" alt="cover" style="width:100%;height:auto;">

Anthropic API에 토큰 사용량을 줄이고 처리량을 높이는 세 가지 업데이트가 추가됐어요. 첫째, 캐시 인식 레이트 리밋(cache-aware rate limits)이 도입돼 캐시된 프롬프트가 레이트 리밋 계산에 더 유리하게 반영됩니다. 둘째, 프롬프트 캐싱 사용 절차가 간소화됐어요. 셋째, Claude 3에서 토큰 효율적 도구 사용(token-efficient tool use)이 가능해져 같은 도구 호출 워크플로를 더 적은 토큰으로 돌릴 수 있습니다. 결과적으로 개발자는 동일 작업당 비용을 낮추고 throughput을 끌어올릴 수 있게 됐다는 게 핵심입니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/token-saving-updates> (anthropic_claude_blog) · 발행일: 2025-03-13*
