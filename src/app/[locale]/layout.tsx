/* eslint-disable @next/next/no-head-element */
"use client";

import { createUserAction } from "@/actions/create-user";
import { useAction } from "next-safe-action/hooks";
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
  const createUser = useAction(createUserAction);

  return (
    <html>
      <head></head>
      <body>
        <button onClick={() => createUser.execute({ name: "test" })}>
          Create User
        </button>
      </body>
    </html>
  );
}
