"use client";

import { createAppKit } from "@reown/appkit/react";
import { mainnet } from "@reown/appkit/networks";

// Create appkit instance
createAppKit({
  networks: [mainnet],
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "YOUR_PROJECT_ID",
});

export default function Providers({ children }) {
  return <>{children}</>;
}