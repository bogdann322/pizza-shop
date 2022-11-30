import React from 'react'

type CategoriesProp = {
	categoryId: number;
	handlClickCategory: (index:number)=> void;
}

const  Categories:React.FC<CategoriesProp> = ({categoryId, handlClickCategory}) => {

	const categories = [
		'All',
		'Meat',
		'Vegetarian',
		'Grill',
		'Spicy ',
		'Closed',
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((value, index) => (
					<li key={index} onClick={()=> handlClickCategory(index)} className={categoryId === index ? 'active' : ''}>{value}</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
