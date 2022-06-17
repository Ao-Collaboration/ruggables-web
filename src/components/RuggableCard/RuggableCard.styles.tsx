import { createUseStyles } from 'react-jss'
import { blue, white } from '../../config/colors'

const styles = {
	card: {
		padding: '1em',
		margin: '1em',
		backgroundColor: white,
		borderRadius: '20px',
		cursor: 'pointer',
	},
	selectedCard: {
		composes: '$card',
		backgroundColor: blue,
	},
	image: {
		width: '320px',
		height: '320px',
		borderRadius: '6px'
	},
	caption: {
		textAlign: 'center'
	}
}

export default createUseStyles(styles)
