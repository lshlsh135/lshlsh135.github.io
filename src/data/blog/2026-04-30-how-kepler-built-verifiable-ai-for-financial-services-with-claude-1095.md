---
title: "Kepler가 Claude로 금융 서비스용 '검증 가능한 AI'를 만든 방법"
slug: "how-kepler-built-verifiable-ai-for-financial-services-with-claude-1095"
pubDatetime: 2026-04-30T00:00:00Z
description: "Kepler는 Claude를 추론 레이어로, 자체 결정론적 인프라를 검증 레이어로 결합해 모든 숫자를 SEC 원문서의 정확한 줄까지 추적 가능한 금융 리서치 플랫폼 Kepler Finance를 만들었다."
tags: ["claude", "kepler", "financial_ai", "opus_4_7", "sonnet_4_6"]
featured: false
draft: false
---

<img src="/covers/1095.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Kepler는 Claude를 추론 레이어로, 자체 결정론적 인프라를 검증 레이어로 결합해 모든 숫자를 SEC 원문서의 정확한 줄까지 추적 가능한 금융 리서치 플랫폼 Kepler Finance를 만들었다.

## 📌 무엇이 바뀌었나
- 2025년 창업한 Kepler(CEO Vinoo Ganesh, CTO John McRaven, 둘 다 Palantir 출신)는 3개월 만에 SEC 파일링 2,600만+, 공개 문서 5,000만+, 비공개 문서 100만+, 27개 시장의 14,000+개 기업을 인덱싱했다.
- 창업 전 사모펀드·헤지펀드·IB 등 147개 금융사를 인터뷰한 결과 "감사할 수 없는 답을 어떻게 신뢰하냐"는 공통된 불신을 확인하고, 모델이 직접 숫자를 만들지 않는 구조를 설계했다.
- 프론티어 모델 벤치마크에서 단순 질의는 비슷했지만, 4~5단계 이상의 의존성 있는 다단계 플랜에서는 Claude만 제약을 끝까지 유지했고 의미 모호한 용어는 멈춰서 분석가에게 물어봤다고 한다.

## 🛠️ 어떻게 쓰는가
스택은 AWS, Rust, Python에 컨테이너 오케스트레이션이며, 비율 계산이나 회계연도 해석처럼 "증명 가능해야 하는" 연산은 Claude가 호출하는 결정론적 실행 환경에서 처리한다. 금융 개념을 정의·공식과 매핑하는 자체 ontology를 두고, 기업가치 계산(우선주·전환사채·소수지분 포함)이나 세그먼트 매출 워터폴 같은 반복 워크플로는 동일 입력→동일 출력을 보장하는 idempotent skill로 묶었다. 모델은 단계별로 분리해 의도 분해·모호성 해결·구조화된 실행 플랜 생성 같은 복합 추론에는 Opus 4.7, 제약이 강하고 처리량이 큰 단계에는 Sonnet 4.6을 쓰며, 회계 라벨을 표준 분류로 매핑하는 recall 작업용 자체 모델은 94% 정확도(타 모델 38~46%)를 기록했다. 검색 결과는 Excel 템플릿에 채워져 클릭 한 번으로 원문서의 해당 라인 아이템으로 점프한다.

## 💼 누가 써야 하나
사모펀드·헤지펀드·투자은행의 애널리스트처럼 평문 질의로 빠르게 데이터를 뽑되 모든 수치를 감사 가능한 출처까지 역추적해야 하는 직군이 1차 타깃이다. 같은 패턴(추론은 Claude, 검증은 결정론적 인프라)은 임상시험 데이터 대조나 판례 추적 같은 헬스케어·법률 업무에도 적용 가능하다고 본다.

## ⚠️ 주의사항
Kepler는 SOC 2 Type II 인증을 보유하고 ISO 27001 인증은 진행 중이며, 감사 로그·고객 환경 격리·end-to-end provenance를 처음부터 내장했다. 팀은 "prompt engineering은 호출 1건을, content engineering은 시스템 전체를 최적화한다"는 입장이라 LLM을 단일 만능 박스로 쓰는 구조는 금융처럼 무관용 도메인에서 권장하지 않는다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/how-kepler-built-verifiable-ai-for-financial-services-with-claude> (anthropic_claude_blog) · 발행일: 2026-04-30*
