"use client";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, bsc, goerli, hardhat, localhost, mainnet } from 'viem/chains'

const projectId = "a9be191231708be56fcec4b07533b187"

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3Modal({ children }) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
