---
title: "Skills와 MCP로 Claude 역량 확장하기"
slug: "extending-claude-s-capabilities-with-skills-and-mcp-1023"
pubDatetime: 2025-12-19T00:00:00Z
description: "Anthropic 공식 글로, Skills와 MCP(Model Context Protocol)를 어떻게 함께 써서 사용자의 워크플로를 그대로 따라가는 에이전트를 만들 수 있는지 정리한 가이드입니다 Skills는 Claude에게 '어떻게 일할지'에 대한 절차·관행을 주…"
tags: ["claude", "skills", "mcp", "agents", "anthropic"]
featured: false
draft: false
---

<img src="/covers/1023.png" alt="cover" style="width:100%;height:auto;">

Anthropic 공식 글로, Skills와 MCP(Model Context Protocol)를 어떻게 함께 써서 사용자의 워크플로를 그대로 따라가는 에이전트를 만들 수 있는지 정리한 가이드입니다. Skills는 Claude에게 '어떻게 일할지'에 대한 절차·관행을 주입하고, MCP는 외부 도구·데이터 소스에 접근하는 통로 역할을 한다는 관점에서 두 기능의 조합 패턴을 설명합니다. 베스트 프랙티스와 실제 사례를 곁들여 둘을 같이 썼을 때 에이전트가 더 일관된 결과를 낸다는 점을 짚습니다. Claude로 사내 워크플로 자동화나 도메인 특화 에이전트를 설계하려는 개발자에게 입문용 레퍼런스로 적합합니다. 본문이 제공되지 않아 구체 코드·설정 예시는 원문을 직접 확인해야 합니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers> (anthropic_claude_blog) · 발행일: 2025-12-19*
