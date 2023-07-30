"use client";

import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let page = usePathname().replace(`/${locale}/`, "");
  let messages = (await import(`../../i18n/${page}/${locale}.json`)).default;
  return (
    <html lang={locale}>
      <head>
        <title>{messages.title}</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
