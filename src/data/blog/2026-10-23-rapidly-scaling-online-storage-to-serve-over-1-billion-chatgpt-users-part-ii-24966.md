---
title: "10억 ChatGPT 사용자를 위한 온라인 스토리지 대규모 확장기 (2부)"
slug: "rapidly-scaling-online-storage-to-serve-over-1-billion-chatgpt-users-part-ii-24966"
pubDatetime: 2026-10-23T17:00:00Z
description: "OpenAI가 자체 스토리지 시스템 Habitat을 어떻게 확장했는지 다룬 기술 포스트 2부다 핵심 성과는 읽기 속도 12배 향상으로, 안정적인 멀티테넌시 구조, 글로벌 캐싱, 그리고 Azure Cosmos DB 도입을 통해 달성했다"
tags: ["openai", "chatgpt", "분산스토리지", "azure_cosmos_db", "인프라확장"]
featured: false
draft: false
---

<img src="/covers/24966.png" alt="cover" style="width:100%;height:auto;">

OpenAI가 자체 스토리지 시스템 Habitat을 어떻게 확장했는지 다룬 기술 포스트 2부다. 핵심 성과는 읽기 속도 12배 향상으로, 안정적인 멀티테넌시 구조, 글로벌 캐싱, 그리고 Azure Cosmos DB 도입을 통해 달성했다. ChatGPT 사용자 10억 명 규모의 트래픽을 처리하기 위한 인프라 설계 결정들을 설명하는 내용으로, 대규모 분산 스토리지 아키텍처에 관심 있는 엔지니어에게 참고할 만한 사례다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://openai.com/index/scaling-storage-one-billion-users-part-two> (openai_blog) · 발행일: 2026-10-23*
