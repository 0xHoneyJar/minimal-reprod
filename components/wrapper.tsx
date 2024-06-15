"use client";

import {
  ConnectButton,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rabbyWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "viem/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
const queryClient = new QueryClient();

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const connectors = connectorsForWallets(
    [
      {
        groupName: "Recommended",
        wallets: [rabbyWallet, metaMaskWallet],
      },
      {
        groupName: "Others",
        wallets: [coinbaseWallet, walletConnectWallet],
      },
    ],
    {
      appName: "THJ Faucet",
      projectId: "b11f7f9ad45c8ad99b7190dd98b99ff3",
    }
  );

  const config = createConfig({
    connectors,
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(process.env[`NEXT_PUBLIC_RPC_URL_${mainnet.id}`]),
    },
    ssr: true,
  });

  return (
    <WagmiProvider reconnectOnMount config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="h-8 w-full bg-white">
            <p>Navbar button</p>
            <ConnectButton />
          </div>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Wrapper;
