"use client";

import { createAppKit } from "@reown/appkit/react";
import { mainnet } from "@reown/appkit/networks";

// Initialize AppKit outside component (as per docs recommendation)
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

if (!projectId || projectId === "YOUR_PROJECT_ID") {
  console.warn(
    "⚠️ Reown Project ID not configured. Please set NEXT_PUBLIC_REOWN_PROJECT_ID in your .env.local file.\n" +
    "Get your Project ID from: https://cloud.reown.com"
  );
}

// Create appkit instance
createAppKit({
  networks: [mainnet],
  projectId: projectId || "YOUR_PROJECT_ID",
  enableWalletConnect: false, // Disable QR code option
});

export default function Providers({ children }) {
  return <>{children}</>;
}