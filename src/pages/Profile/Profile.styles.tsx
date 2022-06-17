import { createUseStyles } from 'react-jss'

const styles = {
	page: {
		minWidth: '100vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	boxSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
	}
}

export default createUseStyles(styles)
