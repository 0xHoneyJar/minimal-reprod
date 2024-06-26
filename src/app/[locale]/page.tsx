"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div>
      <ConnectButton />
      <Link href="/tab" className="text-blue-500">
        Tab
      </Link>
    </div>
  );
}
