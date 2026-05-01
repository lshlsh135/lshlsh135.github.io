---
title: "에이전트의 시점으로 보기: Claude Code에서 도구를 설계하는 방법"
slug: "seeing-like-an-agent-how-we-design-tools-in-claude-code-1063"
pubDatetime: 2026-04-10T00:00:00Z
description: "Anthropic이 Claude Code를 만들면서 AskUserQuestion이나 Task 같은 AI 에이전트용 도구를 어떻게 설계하고 다듬는지 풀어낸 글입니다 핵심 원칙은 '점진적 공개(progressive disclosure)'로, 에이전트가 한 번에 모든 정보…"
tags: ["claude_code", "anthropic", "agent_design", "tool_design", "progressive_disclosure"]
featured: false
draft: false
---

<img src="/covers/1063.png" alt="cover" style="width:100%;height:auto;">

Anthropic이 Claude Code를 만들면서 AskUserQuestion이나 Task 같은 AI 에이전트용 도구를 어떻게 설계하고 다듬는지 풀어낸 글입니다. 핵심 원칙은 '점진적 공개(progressive disclosure)'로, 에이전트가 한 번에 모든 정보를 떠안지 않고 필요할 때 단계적으로 맥락을 받도록 설계한다는 점입니다. 또 하나의 키워드는 '에이전트의 시점으로 보기(seeing like an agent)'인데, 사람이 쓰는 UX가 아니라 LLM이 도구 설명·인자·반환값을 어떻게 읽고 해석하는지를 기준으로 도구를 다듬어야 효과가 극대화된다는 이야기입니다. Claude Code 같은 에이전트형 코딩 도구를 직접 만들거나, MCP 서버·툴 스키마를 설계하는 개발자라면 자기 도구가 모델 입장에서 얼마나 '읽기 쉬운지' 점검해 볼 만한 글입니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/seeing-like-an-agent> (anthropic_claude_blog) · 발행일: 2026-04-10*
