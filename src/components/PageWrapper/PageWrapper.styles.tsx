import { createUseStyles } from 'react-jss'

const styles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundSize: 'cover',
	},
	main: {
		flex: 1,
	},
}

export default createUseStyles(styles)
