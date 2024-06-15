import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function TabPage() {
  return (
    <div>
      <ConnectButton />
      <Link href="/" className="text-blue-500">
        Home
      </Link>
    </div>
  );
}
