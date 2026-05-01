---
title: "Claude 2.1 긴 컨텍스트 프롬프팅 팁"
slug: "long-context-prompting-for-claude-2-1-988"
pubDatetime: 2023-12-06T00:00:00Z
description: "Claude 2.1은 200K 토큰 컨텍스트 윈도우 전반에서 정보를 검색하는 데 강하지만, 프롬프트를 살짝만 다듬어도 성능이 크게 달라진다고 한다 200K 컨텍스트 안에 숨겨진 한 문장을 찾아내는 검색 정확도가 단순한 프롬프트 조정만으로 27%에서 98%까지 올라간…"
tags: ["claude", "long_context", "prompting", "anthropic", "rag"]
featured: false
draft: false
---

Claude 2.1은 200K 토큰 컨텍스트 윈도우 전반에서 정보를 검색하는 데 강하지만, 프롬프트를 살짝만 다듬어도 성능이 크게 달라진다고 한다. 200K 컨텍스트 안에 숨겨진 한 문장을 찾아내는 검색 정확도가 단순한 프롬프트 조정만으로 27%에서 98%까지 올라간 사례가 소개됐다. 즉, 장문 컨텍스트 RAG·문서 분석 시나리오라면 모델 자체보다 프롬프트 설계가 큰 변수라는 메시지다. 구체적인 프롬프트 문구나 실험 세팅은 본문에 포함돼 있지 않아 이 글에서는 그 결론과 수치만 확인할 수 있다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/claude-2-1-prompting> (anthropic_claude_blog) · 발행일: 2023-12-06*
