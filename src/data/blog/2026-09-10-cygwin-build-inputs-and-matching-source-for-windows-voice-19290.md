---
title: "Windows 음성 기능용 Cygwin 빌드 입력물과 대응 소스 아카이브"
slug: "cygwin-build-inputs-and-matching-source-for-windows-voice-19290"
pubDatetime: 2026-09-10T20:19:50Z
description: "이 릴리스는 Codex의 네이티브 Windows 음성(voice) 기능을 빌드할 때 쓰는 CI 전용 빌드 도구 묶음이라, 일반 Codex 사용자 패키지에는 포함되지 않아요 구성은 네 가지인데, cygwin-build-inputs.tar.gz에는 오프라인 빌드 인스톨러…"
tags: ["codex", "cygwin", "windows", "build_tools", "open_source_license"]
featured: false
draft: false
---

<img src="/covers/19290.png" alt="cover" style="width:100%;height:auto;">

이 릴리스는 Codex의 네이티브 Windows 음성(voice) 기능을 빌드할 때 쓰는 CI 전용 빌드 도구 묶음이라, 일반 Codex 사용자 패키지에는 포함되지 않아요. 구성은 네 가지인데, cygwin-build-inputs.tar.gz에는 오프라인 빌드 인스톨러가 쓰는 103개의 고정(pinned) Cygwin 바이너리 패키지와 서명된 패키지 인덱스가 들어 있고, cygwin-build-sources.tar에는 그 인덱스가 지정한 정확한 버전의 소스 패키지 83개(업스트림 소스, 패치, Cygwin -src 패키지의 빌드 레시피 포함)가 담겨 있어요. cygwin-source-map.json은 선택된 각 바이너리 패키지를 소스 아카이브와 매핑하고, 고정 인덱스에서 가져온 소스 크기와 SHA-512 다이제스트를 기록하며, CYGWIN-SOURCE-NOTICE.txt는 소스 접근 및 라이선스 안내문이에요. 바이너리와 소스 아카이브의 SHA-256 핀은 Codex 저장소의 .github/scripts/voice-cygwin-snapshot.json에 있으니 재현 빌드나 무결성 검증이 필요한 분은 그 파일을 참고하면 돼요. 라이선스는 패키지마다 다르므로 Cygwin 라이선스 페이지와 각 소스·바이너리 패키지 아카이브의 고지문을 직접 확인해야 해요.

---

*이 글은 [AI Newsroom](https://lshlsh135.github.io) 자동 요약입니다. · 원문 링크: <https://github.com/openai/codex/releases/tag/voice-cygwin-108b38cf67cbb731> (openai_codex_releases) · 발행일: 2026-09-10*
