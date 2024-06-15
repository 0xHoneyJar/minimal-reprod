/* eslint-disable @next/next/no-head-element */

import Wrapper from "@/components/wrapper";
import "@rainbow-me/rainbowkit/styles.css";
import { unstable_setRequestLocale } from "next-intl/server";
import "../../../styles/globals.css";
import "../../../styles/tailwind.css";

export function generateStaticParams() {
  return ["en"].map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  return (
    <html>
      <head></head>
      <body>
        <Wrapper>
          {children}</Wrapper>
      </body>
    </html>
  );
}
