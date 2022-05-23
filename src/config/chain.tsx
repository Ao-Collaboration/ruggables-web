import { providers } from 'ethers'

export interface ChainConfig {
	ruggableAddress: string;
	pullAddress: string;
}

export const getChainConfig = async (provider: providers.Web3Provider): Promise<ChainConfig> => {
	const network = await provider.getNetwork()
	if (network.chainId === 4) {
		// Rinkeby
		return {
			ruggableAddress: '0xEF9aD9FB57269E9Fe27FFAC83ba6f42C100E0aeC',
			pullAddress: '0xfa8662c4d12c6c7BA2a945E548FdC56D37d36f92',
		}
	}
	// Mainnet
	return {
		ruggableAddress: '',
		pullAddress: '',
	}
}
