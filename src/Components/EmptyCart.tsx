import React from 'react'
import { Link } from 'react-router-dom'

import emptyCart from '../assets/img/empty-cart.png'

const EmptyCart:React.FC = () => {
	return (
		<>
			<div className='cart cart--empty'>
				<h2>
					Cart is empty <span>😕</span>
				</h2>
				<p>
					You probably haven't ordered pizza yet..
					<br />
					To order a pizza, go to the main page.
				</p>
				<img src={emptyCart} alt='Empty cart' />
				<Link to='/' className='button button--black'>
					<span>Go to main page</span>
				</Link>
			</div>
		</>
	)
}
export default EmptyCart
