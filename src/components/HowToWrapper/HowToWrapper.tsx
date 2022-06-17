import Text from '../Text/Text'
import useStyles from './HowToWrapper.styles'

interface Props {
	title: string
	children?: React.ReactNode
}

const HowToWrapper: React.FC<Props> = ({
	title,
	children,
}) => {
	const classes = useStyles()

	return (
		<section className={classes.default}>
			<div className={classes.triangle}>
			</div>
			<Text variant='h2' className={classes.title}>How to ${title}</Text>
			<div className={classes.container}>
				{children}
			</div>
		</section>
	)
}

export default HowToWrapper
