import React from 'react'

import './scss/app.scss'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import NotFound from './Components/pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/pages/Cart'
import FullPizza from './Components/pages/FullPizza'

const App: React.FC = () => {
	return (
		<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/pizza-shop/' element={<Home />} />
							<Route path='/pizza-shop/cart' element={<Cart />} />
							<Route path='/pizza-shop/pizza/:id' element={<FullPizza />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
		</div>
	)
}

export default App
