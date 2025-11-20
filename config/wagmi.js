import { createConfig, http } from 'wagmi'
import { mainnet, arbitrum, polygon, optimism, base, sepolia } from 'wagmi/chains'
import { mainnet as mainnetAppKit, arbitrum as arbitrumAppKit, polygon as polygonAppKit, optimism as optimismAppKit, base as baseAppKit, sepolia as sepoliaAppKit } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = '5acef91d7967e48a748a4a68f1cb790c'

if (!projectId) {
  throw new Error('Project ID is not defined. Please provide a projectId from https://cloud.reown.com')
}

// Set the wagmi chains
export const wagmiChains = [mainnet, arbitrum, polygon, optimism, base, sepolia]

// Set the AppKit networks
export const appKitNetworks = [mainnetAppKit, arbitrumAppKit, polygonAppKit, optimismAppKit, baseAppKit, sepoliaAppKit]

// Create wagmi config
export const wagmiConfig = createConfig({
  chains: wagmiChains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
})

