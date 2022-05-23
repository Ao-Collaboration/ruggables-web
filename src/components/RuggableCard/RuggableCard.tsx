import { Ruggable } from '../../interfaces/Ruggable'

import useStyles from './RuggableCard.styles'

interface Props {
	ruggable: Ruggable
}

const RuggableCard: React.FC<Props> = ({ ruggable }) => {
	const classes = useStyles()
	return (
		<div className={classes.card}>
			<img className={classes.image} src={ruggable.encodedSvg}></img>
			<p className={classes.caption}>{ruggable.name}</p>
		</div>
	)
}

export default RuggableCard
