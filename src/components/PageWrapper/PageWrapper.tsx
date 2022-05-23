import Header from '../Header/Header'
import useStyles from './PageWrapper.styles'

interface Props {
	children?: React.ReactNode
	hasHeader?: boolean
}

const PageWrapper: React.FC<Props> = ({
	children,
	hasHeader = true,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.default}>
			{hasHeader && <Header />}
			<main className={classes.main}>
				{children}
			</main>
		</div>
	)
}

export default PageWrapper
