---
title: "Fable 5의 사이버 안전장치와 탈옥(jailbreak) 심각도 프레임워크 상세 공개"
slug: "more-details-on-fable-5-s-cyber-safeguards-and-our-jailbreak-framework-10282"
pubDatetime: 2026-07-02T23:57:55Z
description: "전 세계에 재배포된 Claude Fable 5의 사이버보안 분류기(safety classifier)가 무엇을 막고 안 막는지, 그리고 Anthropic이 제안하는 AI 탈옥 심각도 프레임워크 초안을 공개했다."
tags: ["anthropic", "fable5", "ai_safety", "cybersecurity", "jailbreak"]
featured: false
draft: false
---

<img src="/covers/10282.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: 전 세계에 재배포된 Claude Fable 5의 사이버보안 분류기(safety classifier)가 무엇을 막고 안 막는지, 그리고 Anthropic이 제안하는 AI 탈옥 심각도 프레임워크 초안을 공개했다.

## 📌 무엇이 바뀌었나
- Fable 5와 함께 배포된 사이버보안 분류기가 요청을 4단계로 구분한다: Prohibited use(차단), High-risk dual use(차단), Low-risk dual use(모니터링·일부 차단), Benign use(허용+일부 모니터링).
- Glasswing 파트너와 함께 만든 'AI 탈옥 심각도 프레임워크' 초안을 공개 — 탈옥마다 위험도가 다른데 이를 정부·업계가 공통 용어로 논의할 기준이 없다는 문제의식에서 출발했다.
- HackerOne 프로그램을 열어 보안 연구자가 Fable 5의 사이버 탈옥을 제보할 수 있게 했다.

## 🛠️ 어떻게 쓰는가
분류기는 이중용도(dual use) 특성을 감안해 모든 사이버보안 활동을 막지는 않는다. 랜섬웨어·와이퍼·멀웨어 개발/배포·C2 인프라·BGP 하이재킹·데이터 유출 같은 'Prohibited use'는 전부 차단하고, 침투 테스트·권한 상승·익스플로잇 개발·ICS/SCADA 평가처럼 정당한 보안 업무이기도 한 'High-risk dual use'는 신뢰할 수 있는 사용자 식별 통제가 갖춰질 때까지 차단한다. 특히 'high-uplift 취약점 탐색'(다른 공개 모델은 못 찾는 취약점 발견)과 익스플로잇 자동 생성을 막되, 다른 모델도 찾을 수 있는 취약점 탐색은 방어에 유익하므로 허용한다. 피드백은 cyber-safeguards@anthropic.com으로 받는다.

## 💼 누가 써야 하나
자사 코드베이스 취약점 스캔 같은 방어 목적으로 Claude를 쓰는 보안 담당자, 그리고 탈옥 기준 논의에 참여하려는 학계·업계·시민사회·정부 관계자를 겨냥한다.

## ⚠️ 주의사항
Fable 5는 이전 모델보다 'safety margin'을 더 크게 설정해, 안전해 보이지 않는 요청은 과하게 차단한다 — 즉 정상적인(benign) 프롬프트가 오탐(false positive)으로 막히는 비율이 높아진다. 분류기 동작은 실사용 피드백에 따라 계속 바뀔 수 있다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/fable-safeguards-jailbreak-framework> (anthropic_claude_blog) · 발행일: 2026-07-02*
