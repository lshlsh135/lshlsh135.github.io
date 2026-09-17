---
title: "생명과학 검증 프로그램(LSVP) 공개"
slug: "introducing-the-life-sciences-verification-program-20224"
pubDatetime: 2026-09-17T17:31:22Z
description: "Anthropic이 2026년 9월 17일 생명과학 검증 프로그램(LSVP)을 공개하고, 검증을 통과한 생명과학 종사자에게 생물학 작업에 대해 더 허용적인 세이프가드가 적용된 Mythos·Opus·Sonnet 모델 접근권을 열었습니다."
tags: ["anthropic", "life_sciences", "lsvp", "safeguards", "claude"]
featured: false
draft: false
---

<img src="/covers/20224.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 2026년 9월 17일 생명과학 검증 프로그램(LSVP)을 공개하고, 검증을 통과한 생명과학 종사자에게 생물학 작업에 대해 더 허용적인 세이프가드가 적용된 Mythos·Opus·Sonnet 모델 접근권을 열었습니다.

## 📌 무엇이 바뀌었나
- 일반 공개된 Fable 모델에서는 막히던 신약 개발, 연구 생물학, 임상 개발, 제조 관련 작업을 LSVP 승인 조직은 수행할 수 있게 됐습니다. 이미 얼리 액세스로 수십 개 조직이 온보딩됐고, 이제 신청이 넓게 열렸습니다.
- 그랜트는 두 종류입니다. 'Standard Use'는 팀 단위로 부여되고 1년마다 갱신하며 오늘 기준 Mythos 5.1, Opus 5, Sonnet 5에 적용됩니다. 'High-risk Use'는 추가 심사가 필요한 애드온으로 생명과학 요청을 막는 세이프가드를 전부 해제하되, 팀이 아니라 특정 연구 프로젝트 하나에만 적용되고 6개월마다 갱신해야 합니다.
- 세이프가드 방식이 실시간 차단에서 오프라인 모니터링으로 바뀌었습니다. 요청 하나하나를 즉시 거절하는 대신, 여러 요청·세션에 흩어진 패턴을 사후에 들여다보는 구조입니다.

## 🛠️ 어떻게 쓰는가
신청은 조직 단위로 하며, 연구 자격·보안 수준·연구 윤리 감독 체계를 검토받는 검증 절차를 거칩니다. 승인되면 Claude Science, Claude.ai, Claude Code, API 등 제품 전반에서 그랜트를 쓸 수 있는데, API와 Claude Science에서는 그랜트 간 전환이 네이티브로 지원되고 Claude.ai와 Claude Code에서는 초기에 미리 지정된 기본 그랜트 하나만 적용됩니다(API 인증으로 Claude Code를 쓰는 경우는 예외). 신청서의 유스케이스에는 채용 공고에 쓸 법한 수준의 개괄 설명만 넣고 민감 정보나 IP는 넣지 말라고 안내합니다.

## 💼 누가 써야 하나
학계 연구실, 스타트업, 제약사 등 생명과학 팀 전반이 대상이며, 기초 과학부터 R&D, 공급망·제조, 임상 개발, 품질 보증, 규제 업무, 투자 실사까지 포괄합니다. 대부분은 Standard Use 하나로 충분하고, 이중용도 성격의 특정 프로젝트가 있는 연구자만 High-risk Use를 추가로 받는 그림입니다.

## ⚠️ 주의사항
LSVP 트래픽은 모니터링을 위해 30일 데이터 보존이 필수이며, 이 데이터는 격리 보관되어 모델 학습에 쓰이지 않고 Anthropic 생명과학 연구팀도 접근할 수 없습니다. 베타라서 개인 Pro·Max 플랜과 서드파티 플랫폼은 아직 미지원이고, BAA 적용 조직도 대상이 아니라 PHI를 다루는 고객은 별도의 non-BAA 조직을 써야 합니다. Mythos에 대한 high-risk 그랜트는 미국 정부와 협의 중이라 출시 시점에는 추가 심사를 거친 소수 기관으로 제한되며, 사이버 분류기 같은 다른 세이프가드는 그대로 유지됩니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/life-sciences-verification-program> (anthropic_claude_blog) · 발행일: 2026-09-17*
