import { createUseStyles } from 'react-jss'
import { weightSemiBold } from '../../config/jss-vars'


const styles = {
	base: {
		textTransform: 'uppercase',
	},
	h1: {
		composes: '$base',
		fontSize: '5em',
	},
	h2: {
		composes: '$base',
		fontSize: '3em',
	},
	h3: {
		composes: '$base',
		fontSize: '2em',
	},
	h4: {
		composes: '$base',
		fontSize: '1.5em',
	},
	bold: {
		composes: '$base',
		fontWeight: weightSemiBold,
	},
	large: {
		composes: '$h4',
	},
	body: {
		composes: '$base',
	},
}

export default createUseStyles(styles)
