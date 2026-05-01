---
title: "Claude Code를 신입 개발자처럼 온보딩시키기: 17년 개발의 교훈"
slug: "onboarding-claude-code-like-a-new-developer-lessons-from-17-years-of-development-1081"
pubDatetime: 2026-04-28T00:00:00Z
description: "워싱턴대 MacCoss Lab의 Brendan MacLean이 70만 줄짜리 17년 묵은 C# 코드베이스 Skyline을 신입 개발자에게 가르치던 방식 그대로 Claude Code에게 적용했더니, 묵혀둔 레거시가 다시 굴러가기 시작했다는 사례."
tags: ["claude_code", "legacy_codebase", "mcp", "skills", "onboarding"]
featured: false
draft: false
---

<img src="/covers/1081.png" alt="cover" style="width:100%;height:auto;">

🎯 한 줄 요약: 워싱턴대 MacCoss Lab의 Brendan MacLean이 70만 줄짜리 17년 묵은 C# 코드베이스 Skyline을 신입 개발자에게 가르치던 방식 그대로 Claude Code에게 적용했더니, 묵혀둔 레거시가 다시 굴러가기 시작했다는 사례.

## 📌 무엇이 바뀌었나
- 떠난 개발자 때문에 1년간 멈춰 있던 Files View 패널 작업을 Brendan이 Claude Code로 2주 만에 마무리, 최종 커밋들은 Claude와 공동 저자로 기록됨.
- 3년간 손 못 대던 LabKey Server 기반 Java 야간 테스트 관리 모듈에 하루도 안 걸려 새 기능 + CSS 레이아웃 업데이트를 추가.
- Skyline의 2,000개+ 튜토리얼 스크린샷 재현이 거의 100% 자동화되었고, diff-only 뷰·픽셀 변화 증폭 기능과 Claude가 그 diff를 "볼 수 있도록" 해주는 C# MCP 서버까지 추가됨.
- 매일 아침 LabKey Server·팀 이메일·GitHub 릴리스 태그 3개 데이터 스트림을 끌어오는 Python MCP 서버를 Claude가 작성해, 야간 테스트 실패·예외·지원 스레드 요약 메일이 출근 전 받은편지함에 도착.
- 회의적이던 한 연구원이 질량 분석 결과 옆에 이온 이동도를 시각화하는 mobilogram pane 플로팅 확장을 Claude Code로 만들어 출시.

## 🛠️ 어떻게 쓰는가
핵심은 AI 컨텍스트를 코드와 분리된 별도 레포 `pwiz-ai`에 두는 것. 모든 브랜치·시점에 동일하게 적용되고 코드와 다른 속도로 자라기 때문이다. 레포 루트의 `CLAUDE.md`는 환경 셋업과 문서 위치를 가리키는 "지형도" 역할만 하고, 진짜 전문성은 skills에 담는다. 예를 들어 debugging 스킬은 "ALWAYS load when investigating bugs, failures, or unexpected behavior"라는 조건으로 Claude를 "guess and test" 모드에서 빼내 근본 원인 분석으로 끌고 간다. 스킬은 "reference do not embed" 원칙을 따라 중앙 문서 지식베이스를 참조만 하고, 자주 쓰는 것으로 skyline-development(프로젝트 안내), version-control(커밋·PR 컨벤션), debugging이 있다.

## 💼 누가 써야 하나
수십만 줄 규모의 오래된 코드베이스를 적은 인원으로 유지하는 팀, 특히 인력 회전이 잦아 "손대면 안 되는 영역"이 쌓인 학계·오픈소스 프로젝트 메인테이너. Brendan은 오픈소스의 경우 온보딩 예산도, 내년에도 남아 있을 컨트리뷰터 보장도 없기 때문에 컨텍스트 레이어가 더더욱 가치 있다고 본다.

## ⚠️ 주의사항
Claude가 만들어주는 to-do와 플랜은 세션 간에 살아남지 않는다 — 살아남는 건 컨텍스트뿐이고, 이건 의도적으로 유지해야 한다. "Claude는 너 없이는 못 배운다, 마법을 기대하지 말라"는 게 Brendan의 조언. 컨텍스트도 다른 프로젝트 산출물처럼 버전 관리하고 키우고 유지해야 하며, 별도 레포든 같은 레포든 versioned·maintained·available이라는 조건만 지키면 된다.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://claude.com/blog/onboarding-claude-code-like-a-new-developer-lessons-from-17-years-of-development> (anthropic_claude_blog) · 발행일: 2026-04-28*
