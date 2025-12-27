"use client";

import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { FaRocket } from "react-icons/fa";

export default function ConnectWalletBtn() {
  const { isReady, isPending, connect, isSuccess, data, disconnect: disconnectWallet } = useAppKitWallet({
    namespace: "eip155", // For EVM wallets
    onSuccess(parsedCaipAddress) {
      console.log("Connected:", parsedCaipAddress);
    },
    onError(error) {
      console.error("Connection error:", error);
    },
  });

  const formatAddress = (address) => {
    if (!address) return "";
    // Handle CAIP address format (eip155:1:0x...)
    const parts = address.split(":");
    const addr = parts.length > 2 ? parts[2] : address;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleConnect = () => {
    // Use "walletConnect" to open the modal with all available wallets
    connect("walletConnect");
  };

  if (isSuccess && data) {
    return (
      <button
        onClick={() => disconnectWallet()}
        className="bg-ftty-orange hover:bg-ftty-orange-light text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-ftty-orange/20"
      >
        <span>{formatAddress(data)}</span>
        <span className="text-sm">(Disconnect)</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={!isReady || isPending}
      className="bg-ftty-orange hover:bg-ftty-orange-light text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-ftty-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaRocket />
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}