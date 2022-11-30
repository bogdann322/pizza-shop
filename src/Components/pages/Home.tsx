import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import Categories from '../../Components/Categories'
import Sort from '../../Components/Sort'
import Pizza from '../../Components/PizzaBlock/Pizza'
import Skeleton from '../../Components/PizzaBlock/Skeleton'
import {
	filtersSelector,
	setCategoryId,
	setFilters,
} from '../../redux/slices/filterSlice'
import {
	fetchPizzas,
	pizzasSelector,
	SearchPizzaParams,
} from '../../redux/slices/pizzasSlice'
import { useAppDispatch } from '../../redux/store'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const isSearch = useRef(false)
	const isMounted = useRef(false)

	const { categoryId, sort, searchValue } = useSelector(filtersSelector)
	const { items, status } = useSelector(pizzasSelector)

	const category = categoryId > 0 ? `category=${categoryId}` : ''
	const sortType = sort !== 'default' ? `&sortBy=${sort}&order=desc` : ''

	// useEffect(() => {
	// 	if (window.location.search) {
	// 		const params = (qs.parse(
	// 			window.location.search.substring(1)
	// 		) as unknown) as SearchPizzaParams
	// 		dispatch(setFilters({
	// 			sort: params.sortType, 
	// 			categoryId: Number(params.category)
	// 		}))
	// 		isSearch.current = true			
	// 	}
	// }, [])
	
	// useEffect(() => {
	// 	if (isMounted.current) {
	// 		const queryString = qs.stringify({
	// 			sort,
	// 			categoryId,
	// 		})
	// 		navigate(`?${queryString}`)
	// 	}
	// 	isMounted.current = true
	// }, [sort, categoryId])

	useEffect(() => {
		window.scrollTo(0, 0)
		// if (!isSearch.current) { }
		dispatch(fetchPizzas({ category, sortType }))
		isSearch.current = false
	}, [categoryId, sort])

	const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />)

	const pizzas = items
		.filter((obj: any) =>
			obj.title.toLowerCase().includes(searchValue.toLowerCase())
		)
		.map((obj: any) => <Pizza {...obj} key={obj.id} />)

	return (
		<>
			<div className='content__top'>
				<Categories
					categoryId={categoryId}
					handlClickCategory={(id: number) => dispatch(setCategoryId(id))}
				/>
				<Sort />
			</div>
			<h2 className='content__title'>All pizzas</h2>
			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>
						Something went wrong <span>😕</span>
					</h2>
					<p>Unfortunately, we cant get pizzas. Please, try it later.</p>
				</div>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeleton : pizzas}
				</div>
			)}
		</>
	)
}

export default Home
