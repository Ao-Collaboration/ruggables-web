import { createUseStyles } from 'react-jss'
import { black, white } from '../../config/colors'

const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0.5em 1em',
		background: black,
	},
	right: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: '3em',
	},
	title: {
		color: white,
	},
	link: {
		color: white,
		textDecoration: 'none',
	},
}

export default createUseStyles(styles)
