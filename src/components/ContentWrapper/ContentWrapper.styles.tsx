import { createUseStyles } from 'react-jss'
import { black, yellow } from '../../config/colors'

const styles = {
	default: {
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: yellow,
	},
	container: {
		width: '1080px',
		maxWidth: '100%',
	},
}

export default createUseStyles(styles)
