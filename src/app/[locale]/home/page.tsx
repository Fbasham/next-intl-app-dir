"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <p>{t("title")}</p>
    </main>
  );
}
