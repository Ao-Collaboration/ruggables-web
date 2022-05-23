import { Link } from 'react-router-dom'
import { MintRoute } from '../routes'

function Home() {
	return (
		<>
			<Link to={`${MintRoute.path}`}>Mint</Link>
		</>
	)
}

export default Home
