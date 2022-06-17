import { createUseStyles } from 'react-jss'
import { black, blue, white } from '../../config/colors'

const styles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: white,
		padding: '2.5em 4em',
	},
	title: {
		color: blue,
		margin: 0,
	},
	content: {
		margin: '0.5em',
	},
}

export default createUseStyles(styles)
