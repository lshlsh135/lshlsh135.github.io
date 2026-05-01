---
title: "Claude Code, 원격 MCP 서버 지원 시작"
slug: "remote-mcp-support-in-claude-code-997"
pubDatetime: 2025-06-18T00:00:00Z
description: "Anthropic이 Claude Code에서 원격 MCP(Model Context Protocol) 서버 연결을 공식 지원한다고 발표했어요 이제 자주 쓰는 개발 도구와 데이터 소스를 로컬에 따로 띄울 필요"
tags: ["claude_code", "mcp", "anthropic", "developer_tools"]
featured: false
draft: false
---

<img src="/covers/997.png" alt="cover" style="width:100%;height:auto;">

Anthropic이 Claude Code에서 원격 MCP(Model Context Protocol) 서버 연결을 공식 지원한다고 발표했어요. 이제 자주 쓰는 개발 도구와 데이터 소스를 로컬에 따로 띄울 필요 없이, 원격 MCP 서버를 통해 Claude Code에 안전하게 붙일 수 있게 됩니다. 기존에는 MCP 서버를 로컬 프로세스로 실행해야 해서 환경 세팅 부담이 있었는데, 원격 지원이 추가되면서 팀 단위로 공용 도구·데이터 통합을 굴리기가 한결 수월해질 것으로 보여요. 다만 본문이 공개되지 않아 구체적인 인증 방식, 지원 트랜스포트, 설정 명령어는 이 글만으로 확인되지 않으니 실제 도입 전 공식 문서를 함께 확인하는 걸 추천합니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/claude-code-remote-mcp> (anthropic_claude_blog) · 발행일: 2025-06-18*
