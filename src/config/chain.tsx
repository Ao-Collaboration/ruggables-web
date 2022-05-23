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
			ruggableAddress: '0x0C216E711Fd65c62e537B7B24112cF934Ac457Ee',
			pullAddress: '0xea4e04c65bC94efa31Df339e273a05911765B974',
		}
	}
	// Mainnet
	return {
		ruggableAddress: '',
		pullAddress: '',
	}
}
