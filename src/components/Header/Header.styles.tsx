import { createUseStyles } from 'react-jss'
import { black } from '../../config/colors'

const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0.5em',
		background: black,
	},
}

export default createUseStyles(styles)
