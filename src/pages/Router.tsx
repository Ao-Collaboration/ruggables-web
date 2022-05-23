import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeRoute, MintRoute, ProfileRoute } from './routes'
import { Web3Context } from '../context/Web3/Web3Context'
import ConnectWallet from './ConnectWallet/ConnectWallet'
import Home from './Home/Home'
import Mint from './Mint/Mint'
import Profile from './Profile/Profile'

function Router() {
	const { web3Provider } = useContext(Web3Context)

	if (!web3Provider) {
		// Require wallet connection
		return (<ConnectWallet />)
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={HomeRoute.path} element={<Home />} />
					<Route path={MintRoute.path} element={<Mint />} />
					<Route path={ProfileRoute.path} element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
