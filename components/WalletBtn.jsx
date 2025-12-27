"use client";

import { useAppKitWallet } from "@reown/appkit-wallet-button/react";

export default function ConnectWalletBtn() {
  const { isReady, isPending, connect, isSuccess, data } = useAppKitWallet({
    namespace: "eip155", // For EVM wallets
    onSuccess(parsedCaipAddress) {
      console.log("Connected:", parsedCaipAddress);
    },
    onError(error) {
      console.error("Connection error:", error);
    },
  });

  return (
    <button
      onClick={() => connect("metamask")} // Connect MetaMask
      disabled={!isReady || isPending}
      style={{
        padding: "10px 16px",
        cursor: "pointer",
        background: "#4A90E2",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
      }}
    >
      {isPending
        ? "Connecting..."
        : isSuccess
        ? "Connected"
        : "Connect Wallet"}
    </button>
  );
}