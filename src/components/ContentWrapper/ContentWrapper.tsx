import useStyles from './ContentWrapper.styles'

interface Props {
	children?: React.ReactNode
}

const ContentWrapper: React.FC<Props> = ({
	children,
}) => {
	const classes = useStyles()

	return (
		<main className={classes.default}>
			<div className={classes.container}>
				{children}
			</div>
		</main>
	)
}

export default ContentWrapper
