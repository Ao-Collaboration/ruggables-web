import { Link } from 'react-router-dom'
import { MintRoute, ProfileRoute } from '../routes'

function Home() {
	return (
		<>
			<Link to={`${MintRoute.path}`}>Mint</Link>
			<Link to={`${ProfileRoute.path}`}>Profile</Link>
		</>
	)
}

export default Home
