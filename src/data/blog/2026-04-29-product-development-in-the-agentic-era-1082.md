---
title: "에이전트 시대의 제품 개발: PM이 Claude Managed Agents로 일하는 법"
slug: "product-development-in-the-agentic-era-1082"
pubDatetime: 2026-04-29T00:00:00Z
description: "Claude Managed Agents PM인 Jess Yan이 자기 제품을 실제로 써서 PM 업무를 자동화하고, 본업인 '크래프트'에 시간을 쏟는 방식을 공유한다."
tags: ["claude", "managed_agents", "claude_code", "agents", "product_management"]
featured: false
draft: false
---

<img src="/covers/1082.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Claude Managed Agents PM인 Jess Yan이 자기 제품을 실제로 써서 PM 업무를 자동화하고, 본업인 '크래프트'에 시간을 쏟는 방식을 공유한다.

## 📌 무엇이 바뀌었나
- Claude Managed Agents(현재 beta) — 클라우드 호스팅 에이전트를 대규모로 빌드/배포하기 위한 조립형 API 묶음.
- API 설계가 문서·코멘트 스레드에서 끝나는 게 아니라, 사전 배포 버전 API 스펙을 Claude Code로 직접 빌드해보면서 다듬어진다. 자체 제품으로 프로토타입을 돌려본 결과를 토대로 API 추상화와 Claude Console UX를 여러 차례 갈아엎었다.
- PM 업무가 두 갈래로 갈라졌다. 초기 모호한 리서치/탐색은 Claude와 Claude Cowork에서 대화형으로, 'job to be done'이 명확해지면 Claude Code로 Managed Agents 위에 맞춤 에이전트를 짜서 처리.

## 🛠️ 어떻게 쓰는가
Claude Code에서 Managed Agents skill을 로드하고 원하는 작업을 스케치하면 Claude가 통합 단계를 설명하면서 에이전트를 만들어준다. 개발자라면 최신 Claude Code의 내장 claude-api skill을 쓰면 되고, 시작 프롬프트는 "start onboarding for managed agents in Claude API". 세션은 클라우드에서 돌아가므로 자리를 떠도 되고, 돌아오면 결과가 와 있다.

사례로 든 에이전트들 — (1) Adoption analytics: 내부 DB와 스키마 이해 skill을 가진 에이전트가 쿼리를 돌려 outlier·패턴을 뽑고, 메모리로 이전 런 결과를 누적. (2) Developer sentiment monitoring: 사전 빌드된 web search tool로 지정 도메인에서 개발자 피드백을 긁어 다중 에이전트로 fan-out 후 합성. (3) Demo building: GitHub demo repo·브랜딩 자산·이벤트 덱에 접근해 청중 맞춤 데모를 조립.

## 💼 누가 써야 하나
PM이 가장 직접적인 타깃이다. 글쓴이는 "PM이고 아직 에이전트를 빌드해본 적 없다면 이번 주에 그것부터 해보라"고 권한다. 매 런칭마다 결이 달라서 자동화가 안 되던 운영성 잡일을 가진 사람, 그리고 자기 API/제품을 직접 써보면서 설계를 다듬고 싶은 빌더에게도 잘 맞는다.

## ⚠️ 주의사항
Managed Agents는 아직 beta 단계다. 글에는 구체적인 가격·쿼터·SLA·정확한 API 엔드포인트는 나오지 않으므로 도입 전 공식 docs를 확인해야 한다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/product-development-in-the-agentic-era> (anthropic_claude_blog) · 발행일: 2026-04-29*
