import Button from '../Button/Button'
import Text from '../Text/Text'
import useStyles from './TextButtonBox.styles'

interface Props {
	title: string
	content: string
	btnText: string
	onClick: () => void
}

const TextButtonBox: React.FC<Props> = ({
	title,
	content, btnText, onClick,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.default}>
			<Text variant='large' className={classes.title}>{title}</Text>
			<Text variant='h2' className={classes.content}>{content}</Text>
			<Button className='blue' onClick={onClick}>{btnText}</Button>
		</div>
	)
}

export default TextButtonBox
