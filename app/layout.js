// app/layout.js
import './globals.css';
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppKitProvider } from '@reown/appkit/react'
import { wagmiConfig, projectId, appKitNetworks } from '../config/wagmi'

export const metadata = {
  title: 'FTTY - Gaming Assets Crypto Marketplace',
  description: 'Purchase gaming assets with FTTY token - the future of gaming economy',
};

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <AppKitProvider
              projectId={projectId}
              networks={appKitNetworks}
            >
              {children}
            </AppKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}