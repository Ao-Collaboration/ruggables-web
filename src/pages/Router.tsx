import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeRoute, MintRoute } from './routes'
import { Web3Context } from '../context/Web3/Web3Context'
import ConnectWallet from './ConnectWallet/ConnectWallet'
import Header from '../components/Header/Header'
import Home from './Home/Home'
import Mint from './Mint/Mint'

function Router() {
	const { web3Provider } = useContext(Web3Context)

	if (!web3Provider) {
		// Require wallet connection
		return (<ConnectWallet />)
	}
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path={HomeRoute.path} element={<Home />} />
					<Route path={MintRoute.path} element={<Mint />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
