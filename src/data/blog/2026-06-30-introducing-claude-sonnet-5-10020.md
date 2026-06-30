---
title: "Claude Sonnet 5 공개"
slug: "introducing-claude-sonnet-5-10020"
pubDatetime: 2026-06-30T17:54:07Z
description: "2026년 6월 30일 공개된 Claude Sonnet 5는 역대 Sonnet 중 가장 에이전트(agentic)에 가까운 모델로, Opus 4.8에 근접한 성능을 더 낮은 가격에 제공합니다."
tags: ["claude_sonnet_5", "anthropic", "agentic_ai", "llm_pricing", "claude_code"]
featured: false
draft: false
---

<img src="/covers/10020.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: 2026년 6월 30일 공개된 Claude Sonnet 5는 역대 Sonnet 중 가장 에이전트(agentic)에 가까운 모델로, Opus 4.8에 근접한 성능을 더 낮은 가격에 제공합니다.

## 📌 무엇이 바뀌었나
- 계획 수립, 브라우저·터미널 같은 도구 사용, 자율 실행 능력이 좋아져서 몇 달 전만 해도 더 크고 비싼 모델이 필요하던 작업을 처리합니다.
- 전작 Sonnet 4.6 대비 추론·도구 사용·코딩·지식 노동 측면에서 개선됐고, BrowseComp(에이전트 검색)와 OSWorld-Verified(컴퓨터 사용) 평가에서 4.6을 확실히 앞섭니다.
- 안전성도 개선되어 악의적 요청 거부·프롬프트 인젝션 방어가 나아졌고, 환각·아첨(sycophancy) 비율이 낮아졌습니다. 다만 보안(사이버) 공격 능력은 Opus 모델보다 한참 떨어집니다.

## 🛠️ 어떻게 쓰는가
API에서는 모델 ID `claude-sonnet-5`로 호출하며, Claude Code와 Claude Platform에서도 쓸 수 있습니다. effort 레벨(최고 단계는 xhigh)을 조절해 Sonnet 5와 Opus 4.8 사이에서 비용과 정확도의 균형을 맞출 수 있습니다.

## 💼 누가 써야 하나
다단계 소프트웨어 엔지니어링, 디버깅, 코드 PR 자동 처리처럼 끝까지 follow-through가 중요한 개발 작업과, Salesforce 업데이트·이메일 발송 같은 일상 업무 자동화에 적합합니다. 더 높은 정확도가 필요하면 Opus 4.8을 권장합니다.

## ⚠️ 주의사항
출시 기념가로 2026년 8월 31일까지 입력 100만 토큰당 $2, 출력 $10이며 이후 $3/$15로 오릅니다(참고로 Opus 4.8은 $5/$25). 토크나이저가 바뀌어 같은 입력이 약 1.0~1.35배 더 많은 토큰으로 처리될 수 있으나, 출시가는 전환이 대체로 비용 중립적이도록 책정됐습니다. 사이버 보안장치(safeguards)가 기본 활성화됩니다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-sonnet-5> (anthropic_claude_blog) · 발행일: 2026-06-30*
