import useStyles from './Text.styles'

export type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bold' | 'large'

interface Props {
	children?: React.ReactNode
	variant: Variants
	className?: string
}

const Text: React.FC<Props> = ({ children, variant, className }) => {
	const classes = useStyles()

	if (variant === 'h1') {
		return <h1 className={`${className} ${classes.h1}`}>{children}</h1>
	} else if (variant === 'h2') {
		return <h2 className={`${className} ${classes.h2}`}>{children}</h2>
	} else if (variant === 'h3') {
		return <h3 className={`${className} ${classes.h3}`}>{children}</h3>
	} else if (variant === 'h4') {
		return <h4 className={`${className} ${classes.h4}`}>{children}</h4>
	} else if (variant === 'body') {
		return <p className={`${className} ${classes.body}`}>{children}</p>
	} else if (variant === 'large') {
		return <p className={`${className} ${classes.large}`}>{children}</p>
	} else if (variant === 'bold') {
		return <p className={`${className} ${classes.bold}`}>{children}</p>
	} else {
		return null
	}
}

export default Text
