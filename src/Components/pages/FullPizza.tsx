import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string
		title: string
		price: number
	}>()

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		async function getFullPizza() {
			try {
				const { data } = await axios.get(
					`https://635a95f038725a1746cac0d5.mockapi.io/items/` + id
				)
				setPizza(data)
			} catch (error) {
				alert('Error while receiving pizza')
				navigate('/')
			}
		}
		getFullPizza()
	}, [])

	if (!pizza) {
		return <>Loading...</>
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} alt='pizza' />
			<h2>{pizza.title}</h2>
			<h3>{pizza.price} $</h3>
		</div>
	)
}

export default FullPizza
