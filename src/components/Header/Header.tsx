import { Link } from 'react-router-dom'
import { MintRoute } from '../../pages/routes'
import ConnectButton from '../Button/ConnectButton'
import Text from '../Text/Text'
import useStyles from './Header.styles'

function Header() {
	const classes = useStyles()

	return (
		<header className={classes.header}>
			<Text variant='h3' className={classes.title}>Ruggables</Text>
			<nav className={classes.right}>
				<Link to={`${MintRoute.path}`}><Text variant='large' className={classes.link}>Mint</Text></Link>
				<ConnectButton />
			</nav>
		</header>
	)
}

export default Header
