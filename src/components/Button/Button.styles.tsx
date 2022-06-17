import { createUseStyles } from 'react-jss'
import { weightSemiBold } from '../../config/jss-vars'
import {
	black,
	white,
	blue,
	red,
} from '../../config/colors'

export type ClassNames = 'black' | 'blue' | 'red' | 'white'

const styles = {
	base: {
		cursor: 'pointer',
		fontSize: '1rem',
		lineHeight: '1rem',
		textAlign: 'center',
		display: 'inline-block',
		outline: 'none',
		border: 'none',
		padding: '1rem 2rem',
		'&:disabled': {
			opacity: 0.5,
			cursor: 'disabled',
			pointerEvents: 'none',
		},
	},
	black: {
		composes: '$base',
		background: black,
		color: white,
	},
	blue: {
		composes: '$base',
		background: blue,
		color: white,
	},
	red: {
		composes: '$base',
		background: red,
		color: white,
	},
	white: {
		composes: '$base',
		background: white,
		color: black,
	},
}

export default createUseStyles(styles)
