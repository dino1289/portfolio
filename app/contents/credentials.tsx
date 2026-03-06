type Credential = {
  language: string;
  level: string;
  link?: string;
};

export const typewriterPhrases = [
  "🇰🇷 Seoul — where my journey began",
  "🇺🇸 USA — 5 years of independence",
  "🇯🇵 Tokyo — where I found my passion",
  "🇩🇪 Hamburg — Career begins",
];

export const credentials: Credential[] = [
  {
    language: "Korean",
    level: "Native",
  },
  {
    language: "English",
    level: "C1 Certified",
    link: "https://drive.google.com/file/d/1dEZGfeZQ4b9ShWCa33mVyfCM7gXYdDKs/view?usp=drive_link",
  },
  {
    language: "Japanese",
    level: "C1 Certified",
    link: "https://drive.google.com/file/d/1V7S2QgGSL3YP7FAYTXqwH4gsYnrXzHjk/view?usp=drive_link",
  },
  {
    language: "German",
    level: "B1 → C1 (in progress)",
    link: "https://drive.google.com/file/d/1XxBJvfohv7MCVLiqi8z5iQhppBzRncaC/view?usp=drive_link",
  },
];
