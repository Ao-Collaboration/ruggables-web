import { ethers } from 'ethers'
import { getChainConfig } from '../config/chain'
import RuggableABI from '../abis/RuggableFreeMint.json'

export const getRuggableContract = async (provider: ethers.providers.Web3Provider): Promise<ethers.Contract> => {
	return new ethers.Contract((await getChainConfig(provider)).ruggableAddress, RuggableABI, await provider.getSigner())
}
