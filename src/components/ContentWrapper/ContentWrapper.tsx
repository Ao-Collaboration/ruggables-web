import useStyles from './ContentWrapper.styles'

interface Props {
	children?: React.ReactNode
}

const ContentWrapper: React.FC<Props> = ({
	children,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.default}>
			{children}
		</div>
	)
}

export default ContentWrapper
