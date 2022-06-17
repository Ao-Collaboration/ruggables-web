import HowToWrapper from '../components/HowToWrapper/HowToWrapper'
import Text from '../components/Text/Text'

const PlayHelp: React.FC = () => {
	return (
		<HowToWrapper title="Play">
			<Text variant="h2">Rallies</Text>
			<Text variant="body">
				A rally is started by the attacker. To start a rally, the user must
				supply their attacking Ruggable id, the defender Ruggable id and a
				bounty of $PULL. The bounty is deducted from the deposited pull of the
				attacker.
			</Text>
			<Text variant="body">
				During a rally, the attacker may increase (but not decrease) the bounty
				of the rally. Other users may contribute to the rally by using their
				deposited $PULL.
			</Text>
		</HowToWrapper>
	)
}

export default PlayHelp
