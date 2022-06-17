import { createUseStyles } from 'react-jss'
import { black, white } from '../../config/colors'

const styles = {
	default: {
		position: 'relative',
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: white,
		maxWidth: '100%',
		overflow: 'hidden',
	},
	triangle: {
		position: 'absolute',
		borderStyle: 'solid',
		height: '10em',
		left: '-25%',
		width: '150%',
		background: black,
		clipPath: 'polygon(100% 0, 0 0, 50% 100%)',
		zIndex: 0,
	},
	title: {
		zIndex: 1,
		color: white,
		marginTop: '1em',
	},
}

export default createUseStyles(styles)
