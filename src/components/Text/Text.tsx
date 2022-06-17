import useStyles from './Text.styles'

export type Variants = 'h1' | 'h2' | 'h3' | 'body' | 'bold'

interface Props {
	children?: React.ReactNode
	variant: Variants
}

const Text: React.FC<Props> = ({ children, variant }) => {
	const classes = useStyles()

	if (variant === 'h1') {
		return <h1 className={classes.h1}>{children}</h1>
	} else if (variant === 'h2') {
		return <h2 className={classes.h2}>{children}</h2>
	} else if (variant === 'h3') {
		return <h3 className={classes.h3}>{children}</h3>
	} else if (variant === 'body') {
		return <p className={classes.body}>{children}</p>
	} else if (variant === 'bold') {
		return <p className={classes.bold}>{children}</p>
	} else {
		return null
	}
}

export default Text
