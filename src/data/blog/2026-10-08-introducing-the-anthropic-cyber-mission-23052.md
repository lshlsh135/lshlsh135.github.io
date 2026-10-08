---
title: "Anthropic 사이버 미션 출범: 핵심 인프라 방어 프로그램(CIDP)과 오픈소스 보안 스캐너 공개"
slug: "introducing-the-anthropic-cyber-mission-23052"
pubDatetime: 2026-10-08T09:04:16Z
description: "Anthropic이 전력망·상수도·교통망 같은 핵심 인프라와 오픈소스 소프트웨어 보안을 지원하기 위한 장기 이니셔티브 'Anthropic Cyber Mission'을 2026년 10월 8일 공식 출범했다."
tags: ["cybersecurity", "anthropic", "oss_scanner", "critical_infrastructure", "오픈소스_보안"]
featured: false
draft: false
---

<img src="/covers/23052.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 전력망·상수도·교통망 같은 핵심 인프라와 오픈소스 소프트웨어 보안을 지원하기 위한 장기 이니셔티브 'Anthropic Cyber Mission'을 2026년 10월 8일 공식 출범했다.

## 📌 무엇이 바뀌었나
- Critical Infrastructure Defense Program(CIDP): Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, Rockwell Automation 등 11개 창립 파트너사에 프런티어 Claude 모델·현장 엔지니어·위협 연구를 제공한다.
- OSS Scanner 출시: Google의 OSS-Fuzz에서 영감을 받은 옵트인 서비스로, 등록된 오픈소스 프로젝트에 Claude 최고 모델 기반 정기 보안 스캔을 무료 제공한다. 각 보고서에는 버그 익스플로잇 개념 증명(PoC), 설명, 가능한 경우 수정 제안이 포함된다.
- Project Glasswing을 확장된 Cyber Verification Program에 통합해 더 많은 보안 방어자가 최고 성능 모델에 접근할 수 있게 됐다.

## 🛠️ 어떻게 쓰는가
OSS Scanner는 옵트인 방식이며, 등록 프로젝트는 주기적으로 모델이 자동 생성한 취약점 보고서를 받는다. 보고서는 사람 검토 없이 발송되어 속도는 빠르지만 심각도 등급 오류 같은 부정확성이 포함될 수 있으며, 목표 진양성률(true-positive rate)은 90% 이상이다. 대량 보고서를 처리할 여력이 없는 소규모 프로젝트에는 기존 인간 검증 방식의 CVD(Coordinated Vulnerability Disclosure) 공개를 유지한다. CIDP에 참여를 원하는 보안 제품·서비스 기업은 별도 등록 링크를 통해 관심 신청이 가능하고, 오픈소스 유지관리자는 'Claude for Open Source'를 통해 Claude Max 무료 구독을 신청할 수 있다.

## 💼 누가 써야 하나
전력·수도·교통 등 OT/ICS 환경을 담당하는 보안 기업·컨설팅사, 그리고 정기적인 취약점 스캔과 패치 제안이 필요한 오픈소스 프로젝트 유지관리자에게 적합하다.

## ⚠️ 주의사항
OSS Scanner는 자동 발송 방식이므로 심각도 오분류 등 부정확한 내용이 일부 포함될 수 있으며, Anthropic은 진양성률과 수정 품질을 지속 개선할 계획임을 명시했다. Defender Advantage Fund(0xDAF)가 8월에 출범해 OSS Scanner 무료 운영 비용을 지원한다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/anthropic-cyber-mission> (anthropic_claude_blog) · 발행일: 2026-10-08*
