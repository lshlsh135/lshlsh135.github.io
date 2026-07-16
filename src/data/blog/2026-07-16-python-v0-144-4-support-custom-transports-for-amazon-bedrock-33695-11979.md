---
title: "python-v0.144.4: Amazon Bedrock에 커스텀 트랜스포트 지원 (#33695)"
slug: "python-v0-144-4-support-custom-transports-for-amazon-bedrock-33695-11979"
pubDatetime: 2026-07-16T21:41:00Z
description: "내장 amazon-bedrock 프로바이더가 AWS 프로필·리전뿐 아니라 base_url, auth, http_headers까지 오버라이드할 수 있게 됐어요 덕분에 AWS 요청 서명(request signing)을 적용하지 않고도 커맨드 기반 bearer 인증과 직접…"
tags: ["amazon_bedrock", "codex", "authentication"]
featured: false
draft: false
---

<img src="/covers/11979.png" alt="cover" style="width:100%;height:auto;">

내장 amazon-bedrock 프로바이더가 AWS 프로필·리전뿐 아니라 base_url, auth, http_headers까지 오버라이드할 수 있게 됐어요. 덕분에 AWS 요청 서명(request signing)을 적용하지 않고도 커맨드 기반 bearer 인증과 직접 설정한 엔드포인트를 쓸 수 있고, 기본 Bedrock 설정에서는 리전별 엔드포인트 해석은 그대로 유지됩니다. 또 Bedrock 계정의 credentialSource enum이 usesCodexManagedCredentials 불리언으로 바뀌어서, 커맨드 인증이나 외부에서 관리되는 자격증명 구성이 일관되게 보고돼요. 테스트는 설정 병합·검증, 커스텀 헤더가 붙은 커맨드 인증 프록시 요청, 그리고 관리형·외부 자격증명 계정 보고를 커버합니다. 사내 프록시나 게이트웨이를 통해 Bedrock을 호출하는 구성을 쓰는 분들에게 유용한 변경이에요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://github.com/openai/codex/releases/tag/python-v0.144.4> (openai_codex_releases) · 발행일: 2026-07-16*
