import { useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import { Web3Context } from '../../context/Web3/Web3Context'
import useStyles from './Mint.styles'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { getRuggableContract } from '../../utils/contractHelper'

const Mint = () => {
	const { web3Provider } = useContext(Web3Context)
	const classes = useStyles()
	const [txPending, setTxPending] = useState(false)
	const [message, setMessage] = useState('')

	const doMint = async () => {
		if (!web3Provider) {
			return
		}
		const signer = web3Provider.getSigner()
		const contract = await getRuggableContract(web3Provider)
		const tx = await contract.mint(await signer.getAddress(), 1)
		setTxPending(true)
		await tx.wait()
		setTxPending(false)
		setMessage('You\'ve been RUGGED!')
	}

	return (
		<PageWrapper>
			<div className={classes.page}>
				<h1>Mint your Ruggable!</h1>
				<Button onClick={doMint} disabled={txPending}>
					{txPending ? 'Tx Pending...' : 'Mint' }
				</Button>
				<p>{message}</p>
			</div>
		</PageWrapper>
	)
}

export default Mint
