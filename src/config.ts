export const SITE = {
  website: "https://lshlsh135.github.io/",
  author: "AI Newsroom",
  profile: "https://github.com/lshlsh135",
  desc: "AI / Claude / Codex 한국어 자동 큐레이션 — feed-aggregator 자동 발행",
  title: "AI Newsroom",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/lshlsh135/lshlsh135.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;
