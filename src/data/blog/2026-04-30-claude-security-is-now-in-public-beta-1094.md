---
title: "Claude Security, 퍼블릭 베타 공개 — Opus 4.7 기반 코드 취약점 스캔/패치"
slug: "claude-security-is-now-in-public-beta-1094"
pubDatetime: 2026-04-30T00:00:00Z
description: "Anthropic이 Claude Enterprise 고객을 대상으로 Opus 4.7 기반 코드 취약점 스캐너 'Claude Security'를 퍼블릭 베타로 풀었습니다."
tags: ["claude_security", "opus_4_7", "appsec", "enterprise", "public_beta"]
featured: false
draft: false
---

<img src="/covers/1094.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 Claude Enterprise 고객을 대상으로 Opus 4.7 기반 코드 취약점 스캐너 'Claude Security'를 퍼블릭 베타로 풀었습니다.

## 📌 무엇이 바뀌었나
- 기존 'Claude Code Security'를 'Claude Security'로 개명하고, 한정된 리서치 프리뷰(수백 개 조직 테스트)에서 Enterprise 전체 공개로 확대
- Opus 4.7이 코드베이스 전반을 스캔하면서 단순 패턴 매칭이 아니라 파일·모듈 간 상호작용과 데이터 흐름을 추적하는 방식으로 취약점을 찾고, 각 발견에 대해 신뢰도 등급·심각도·재현 방법·타깃 패치 지시를 함께 제공
- 이번 릴리스에서 예약 스캔(scheduled scans), 특정 디렉터리/브랜치 한정 스캔, 사유를 명시한 finding 무시(dismiss), CSV·Markdown 내보내기, Slack·Jira 등 웹훅 연동, 트리아지된 finding 추적 강화가 추가됨
- 파트너 통합: CrowdStrike, Microsoft Security, Palo Alto Networks, SentinelOne, TrendAI, Wiz가 Opus 4.7을 자사 보안 플랫폼에 임베드하고, Accenture·BCG·Deloitte·Infosys·PwC가 서비스 파트너로 도입을 지원

## 🛠️ 어떻게 쓰는가
Claude.ai 사이드바에서 바로 들어가거나 claude.ai/security로 접속해서, 연결된 레포 중 하나(또는 특정 디렉터리/브랜치)를 골라 스캔을 시작합니다. 별도 API 통합이나 커스텀 에이전트 빌드가 필요 없고, 조직이 이미 Claude를 쓰고 있다면 오늘부터 스캔 가능합니다. 스캔이 끝나면 각 finding의 상세 설명과 함께 타깃 패치 지시가 나오고, 'Claude Code on the Web'에서 컨텍스트째로 수정 작업을 이어갈 수 있습니다. 관리자는 admin console에서 기능을 활성화하면 됩니다.

## 💼 누가 써야 하나
사내 보안팀과 엔지니어링이 별도 트랙으로 핑퐁하느라 finding이 며칠씩 묵는 중·대형 조직, 또는 CrowdStrike·Wiz·Microsoft Security 같은 기존 보안 스택을 그대로 쓰면서 LLM 기반 코드 리뷰를 얹고 싶은 Enterprise 보안 책임자(CISO·AppSec)에게 적합합니다. DoorDash 등 사례에서는 '스캔→PR 머지'까지의 시간 단축을 핵심 지표로 삼고 있다고 합니다.

## ⚠️ 주의사항
현재는 Claude Enterprise 고객만 사용 가능하고, Team/Max 플랜은 'coming soon' 상태입니다. Opus 4.7에는 사이버 안전장치(cyber safeguards)가 새로 들어가 있어서 금지·고위험 사이버 용도로 보이는 요청은 자동 차단되며, 정당한 방어 업무가 이 가드에 걸리는 조직은 'Cyber Verification Program'을 통해 검증받아야 합니다. 또 별도로 운영되는 'Claude Mythos Preview'(Project Glasswing)는 이번 베타와 다른 트랙이라는 점도 혼동하지 마세요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/claude-security-public-beta> (anthropic_claude_blog) · 발행일: 2026-04-30*
