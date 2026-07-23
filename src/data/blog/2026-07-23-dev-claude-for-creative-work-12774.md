---
title: "[dev] 크리에이티브 작업을 위한 Claude"
slug: "dev-claude-for-creative-work-12774"
pubDatetime: 2026-07-23T17:41:31Z
description: "Anthropic이 Ableton, Adobe, Blender, SketchUp, Splice 등 크리에이티브 업계에서 이미 쓰이는 툴들과 Claude를 연결하는 커넥터 세트를 공개했어요."
tags: ["claude", "connectors", "mcp", "blender", "creative_tools"]
featured: false
draft: false
---

<img src="/covers/12774.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: Anthropic이 Ableton, Adobe, Blender, SketchUp, Splice 등 크리에이티브 업계에서 이미 쓰이는 툴들과 Claude를 연결하는 커넥터 세트를 공개했어요.

## 📌 무엇이 바뀌었나
- 새 커넥터 8종 추가: Ableton(Live·Push 공식 문서 기반 답변), Adobe(Photoshop·Premiere·Express 등 Creative Cloud 앱의 50개 이상 툴 활용), Affinity by Canva(일괄 이미지 조정·레이어 이름 변경·파일 내보내기 같은 반복 작업 자동화), Autodesk Fusion(대화로 3D 모델 생성·수정), Blender(Python API를 자연어로 다루는 인터페이스), Resolume Arena·Wire(VJ가 자연어로 실시간 제어), SketchUp(대화를 3D 모델링 시작점으로 변환 후 SketchUp에서 다듬기), Splice(로열티프리 샘플 카탈로그 검색)
- Blender 커넥터는 Blender 개발팀이 직접 만든 MCP 커넥터로 공식 제공되며, MCP 기반이라 Claude 외 다른 LLM에서도 쓸 수 있어요
- Anthropic Labs의 새 제품 'Claude Design'도 소개됐는데, 소프트웨어 경험 아이디어를 시각화하고 피드백 기반으로 반복 탐색한 뒤 결과를 Canva를 시작으로 다른 툴에 내보낼 수 있어요

## 🛠️ 어떻게 쓰는가
복잡한 소프트웨어의 온디맨드 튜터로 쓰거나(모디파이어 스택 설명, 신시사이저 기법 안내 등), Claude Code로 커스텀 셰이더·프로시저럴 애니메이션·파라메트릭 모델 같은 스크립트와 플러그인을 만들 수 있어요. 여러 앱에 걸친 프로젝트에서 포맷 변환·데이터 재구성·에셋 동기화를 맡기거나, 에셋 일괄 처리·프로젝트 스캐폴딩 같은 반복 작업을 넘기는 용도도 있고요. Blender 커넥터로는 씬 전체를 분석·디버깅하고, Python API를 통해 Blender 인터페이스에 새 도구를 직접 추가할 수도 있어요.

## 💼 누가 써야 하나
3D 아티스트, 디자이너·엔지니어, VJ·라이브 비주얼 아티스트, 음악 프로듀서 등 위 툴들을 이미 쓰는 크리에이티브 전문가가 대상이에요. RISD, Ringling College, Goldsmiths(런던대) 등 예술·디자인 교육 프로그램과도 협력해 학생·교수진에게 Claude와 커넥터를 제공한다고 해요.

## ⚠️ 주의사항
Autodesk Fusion 커넥터는 Fusion 구독이 있어야 사용할 수 있어요. 또 5월 1일 업데이트로 Blender 측이 Anthropic의 지원금을 Blender Development Fund가 아닌 일회성 기부로 받기로 하면서 관련 문구가 수정됐다는 점도 참고하세요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://www.anthropic.com/news/claude-for-creative-work-dev> (anthropic_claude_blog) · 발행일: 2026-07-23*
