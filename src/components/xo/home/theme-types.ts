export interface MoodTheme {
  key: "ivory" | "noir" | "earthen";
  dark: boolean;
  canvas: string;
  alt: string;
  text: string;
  muted: string;
  accent: string;
  block: string;
}

export const XO_THEMES: Record<string, MoodTheme> = {
  ivory:   { key: "ivory",   dark: false, canvas: "var(--milk)", alt: "var(--dove)", text: "var(--ink)",     muted: "var(--muted)",       accent: "var(--clay)",    block: "var(--clay)" },
  noir:    { key: "noir",    dark: true,  canvas: "var(--ink)",  alt: "#221D17",     text: "var(--on-dark)", muted: "var(--on-dark-mut)", accent: "var(--amber-2)", block: "var(--forest)" },
  earthen: { key: "earthen", dark: false, canvas: "var(--milk)", alt: "#EDF1EE",     text: "var(--ink)",     muted: "var(--muted)",       accent: "var(--forest)",  block: "var(--forest)" },
};
