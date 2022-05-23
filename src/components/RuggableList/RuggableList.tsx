import { BigNumber } from 'ethers'
import { useContext, useEffect, useState } from 'react'
import { Web3Context } from '../../context/Web3/Web3Context'
import { Ruggable } from '../../interfaces/Ruggable'
import { getRuggableContract } from '../../utils/contractHelper'
import { decodeRuggable } from '../../utils/ruggableHelper'
import RuggableCard from '../RuggableCard/RuggableCard'
import Spinner from '../Spinner/Spinner'
import useStyles from './RuggableList.styles'

function RuggableList() {
	const classes = useStyles()
	const { web3Provider } = useContext(Web3Context)
	const [ruggables, setRuggables] = useState<Ruggable[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getRuggables()
	}, [web3Provider])

	const getRuggables = async () => {
		if (!web3Provider) {
			return
		}
		setIsLoading(true)

		// const signer = web3Provider.getSigner()
		// const contract = await getRuggableContract(web3Provider)
		// const owned: BigNumber[] = contract.tokensOfOwner(await signer.getAddress())
		// const metadatas = await Promise.all(owned.map(id => contract.tokenURI(id)))
		// setRuggables(metadatas.map(m => decodeRuggable(m)))
		setRuggables([decodeRuggable('Ruggable #1')])

		setIsLoading(false)
	}

	return (
		<div className={classes.container}>
			{isLoading ?
				<Spinner />
				:
				<>
					{
						ruggables.length > 0 ?
							ruggables.map(ruggable => (
								<RuggableCard
									key={ruggable.id}
									ruggable={ruggable}
								/>
							))
							:
							<p>No Ruggables. Go buy one</p>
					}
				</>
			}
		</div>
	)
}

export default RuggableList
