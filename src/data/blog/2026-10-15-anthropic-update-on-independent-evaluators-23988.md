---
title: "Anthropic, 독립 평가 기관에 '직원 수준' 접근권 부여 시작"
slug: "anthropic-update-on-independent-evaluators-23988"
pubDatetime: 2026-10-15T17:20:00Z
description: "Anthropic이 METR·SecureBio·Accenture 등 외부 기관에 내부 접근권을 단계적으로 열어, 자사 AI 모델의 위험도 평가를 독립적으로 공개하게 한다."
tags: ["anthropic", "ai_safety", "metr", "독립평가", "거버넌스"]
featured: false
draft: false
---

<img src="/covers/23988.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 METR·SecureBio·Accenture 등 외부 기관에 내부 접근권을 단계적으로 열어, 자사 AI 모델의 위험도 평가를 독립적으로 공개하게 한다.

## 📌 무엇이 바뀌었나
- METR(프론티어 AI 모델 평가 전문 비영리단체) 소속 직원 6명에게 회사 하드웨어·사무 공간·내부 시스템 접근권을 부여하는 '3단계(tier 3)' 임베딩이 시작됐다.
- METR은 위험 평가 결과를 자체적으로 발표할 수 있으며, Anthropic은 발표 자체를 거부할 수 없다(고객 데이터·변호사-의뢰인 특권 정보·모델 아키텍처 정보 등 명확히 정의된 카테고리만 삭제 요청 가능).
- 접근권을 3단계로 나눠 운영한다: 1단계는 Anthropic 승인 후 발표 / 2단계는 승인 없이 발표 가능·더 넓은 접근 / 3단계는 METR처럼 직원 수준 접근+2단계 발표 권한.
- SecureBio는 현재 1단계로, 2026년 8월 위험 보고서의 화학·생물 무기 챕터를 검토 중이다.
- Accenture·Faculty와는 모델 레드팀, 정렬(alignment) 평가, 안전장치 테스트를 포함한 파트너십을 협의 중이며, Hugging Face와는 초기 논의 단계다.

## 🛠️ 어떻게 쓰는가
이번 발표는 개발자나 사용자가 직접 조작하는 API·플래그 변경이 아니라 Anthropic의 내부 거버넌스 구조 변화다. METR이 발표하는 위험 평가 보고서는 공개될 예정이므로, 모델의 실제 위험 수준을 제3자 관점에서 확인하려면 METR 발표를 직접 참고하면 된다.

## 💼 누가 써야 하나
AI 안전성·규제 동향을 추적하는 연구자, 기업 AI 도입 시 리스크 평가가 필요한 담당자, 그리고 Anthropic 모델을 프로덕션에 쓰는 팀이 이 평가 결과를 외부 근거 자료로 활용할 수 있다.

## ⚠️ 주의사항
METR 팀은 Anthropic 보안 기준 하에 운영되는 소수 인원으로 한정되며, 같은 METR 내 다른 연구원들과는 완전히 차단(silo)된다. 또한 아키텍처 정보는 유출 위험이 높아 원칙적으로 공유 대상에서 제외되며, 공유 시 명시적 내부 승인이 필요하다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/an-update-on-independent-evaluators> (anthropic_claude_blog) · 발행일: 2026-10-15*
