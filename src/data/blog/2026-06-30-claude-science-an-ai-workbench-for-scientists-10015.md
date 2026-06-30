---
title: "Claude Science, 과학자를 위한 AI 워크벤치"
slug: "claude-science-an-ai-workbench-for-scientists-10015"
pubDatetime: 2026-06-30T17:00:01Z
description: "Anthropic이 PubMed·Jupyter·R·클러스터 터미널 등 흩어진 연구 도구를 하나로 묶고, 모든 결과물에 재현 가능한 이력을 남기는 과학자용 AI 워크벤치 'Claude Science'를 베타로 공개했어요."
tags: ["claude_science", "anthropic", "life_sciences", "ai_agent", "bionemo"]
featured: false
draft: false
---

<img src="/covers/10015.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 PubMed·Jupyter·R·클러스터 터미널 등 흩어진 연구 도구를 하나로 묶고, 모든 결과물에 재현 가능한 이력을 남기는 과학자용 AI 워크벤치 'Claude Science'를 베타로 공개했어요.

## 📌 무엇이 바뀌었나
- 60개가 넘는 큐레이트된 스킬·커넥터를 가진 총괄(coordinating) 에이전트가 유전체학, 단일세포, 단백질체학, 구조생물학, 케모인포매틱스 등에 미리 설정돼 있고, 60개 이상의 과학 DB(UniProt, PDB, Ensembl, Reactome, ClinVar, ChEMBL, GEO 등)에 연결돼요.
- 3D 단백질 구조, 게놈 브라우저 트랙, 화학 구조 같은 결과물을 네이티브로 렌더링하고, 그림을 만들 때 생성 코드·실행 환경·전체 메시지 이력까지 함께 붙여 몇 달 뒤에도 검증·재현이 가능해요.
- 리뷰어 에이전트가 인용·계산을 점검해 잘못된 인용, 추적 불가능한 숫자, 코드와 안 맞는 그림을 표시하고 스스로 교정해요.

## 🛠️ 어떻게 쓰는가
Jupyter Notebook처럼 macOS·Linux 로컬에서 쓰거나 SSH·HPC 로그인 노드를 통해 원격 머신에서 접근할 수 있어요. 평범한 말로 "격자선 제거"나 "축을 로그 스케일로" 같은 요청을 하면 에이전트가 자기 코드를 직접 고쳐요. 대용량 분석(단백질 폴딩, 게놈 파이프라인 등)은 계획을 먼저 짜고 새 리소스 접근 전 사용자에게 물어본 뒤, 본인 HPC 클러스터(SSH)나 Modal 계정으로 작업을 제출해 GPU 1개에서 수백 개까지 확장해요. NVIDIA BioNeMo Agent Toolkit 스킬로 Evo 2, Boltz-2, OpenFold3 같은 생명과학 모델에도 연결되고, 기존 파이프라인을 재사용 가능한 스킬로 저장할 수 있어요.

## 💼 누가 써야 하나
단일세포 RNA 시퀀싱, CRISPR 스크린 설계, 단백질 구조 예측, 분자역학 연구를 하는 생물·생의학 연구자가 대상이에요. 실제로 Manifold Bio는 타깃 후보 선정에, Allen Institute의 Jérôme Lecoq는 20여 개 커스텀 스킬로 100쪽 넘는 장문 리뷰 작성에, UCSF의 Stephen Francis는 신경교종 역학 분석을 기존의 약 1/10 시간으로 단축하는 데 활용했어요.

## ⚠️ 주의사항
현재 베타이며 macOS·Linux에서 Pro·Max·Team·Enterprise 플랜에만 제공돼요. Team·Enterprise는 관리자가 활성화해야 하고, 데이터는 연구실 자체 인프라에서 돌아가 민감 데이터가 외부로 나가지 않으며 각 단계에 필요한 컨텍스트만 Claude로 전송돼요. AI for Science 프로젝트 지원(최대 $30,000 크레딧, Modal 컴퓨트 최대 $2,000)은 2026년 7월 15일까지 신청을 받아요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-science-ai-workbench> (anthropic_claude_blog) · 발행일: 2026-06-30*
