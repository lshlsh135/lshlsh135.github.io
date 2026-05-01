---
title: "Claude의 프롬프트 캐싱"
slug: "prompt-caching-with-claude-1058"
pubDatetime: 2025-08-14T00:00:00Z
description: "Claude가 API 호출 사이에 자주 쓰이는 컨텍스트를 캐싱해서 긴 프롬프트의 비용과 지연 시간을 줄여주는 기능이다 이제 Anthropic API에서 정식(GA)으로 제공되며, Amazon Bedrock과 Google Cloud Vertex AI에서도 프리뷰로 쓸…"
tags: ["claude", "prompt_caching", "anthropic_api"]
featured: false
draft: false
---

<img src="/covers/1058.png" alt="cover" style="width:100%;height:auto;">

Claude가 API 호출 사이에 자주 쓰이는 컨텍스트를 캐싱해서 긴 프롬프트의 비용과 지연 시간을 줄여주는 기능이다. 이제 Anthropic API에서 정식(GA)으로 제공되며, Amazon Bedrock과 Google Cloud Vertex AI에서도 프리뷰로 쓸 수 있다. 같은 시스템 프롬프트나 긴 문서를 반복해서 보내는 워크로드라면 가장 효과를 본다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/prompt-caching> (anthropic_claude_blog) · 발행일: 2025-08-14*
