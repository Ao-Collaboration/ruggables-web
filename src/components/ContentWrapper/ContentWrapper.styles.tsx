import { createUseStyles } from 'react-jss'
import { yellow } from '../../config/colors'

const styles = {
	default: {
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: yellow,
	},
}

export default createUseStyles(styles)
