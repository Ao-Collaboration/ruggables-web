import HowToWrapper from '../components/HowToWrapper/HowToWrapper'
import Text from '../components/Text/Text'

const MintHelp: React.FC = () => {
	return (
		<HowToWrapper title="Mint">
			<Text variant="h2">Mint</Text>
			<Text variant="body">
				Switch to Rinkeby, click the button and submit the transaction. ezpz
			</Text>
		</HowToWrapper>
	)
}

export default MintHelp
