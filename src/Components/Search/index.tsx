import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Search.module.scss'
import { filtersSelector, setSearchValue } from '../../redux/slices/filterSlice'

const Search: React.FC = () => {
	const dispatch = useDispatch()
	const { searchValue } = useSelector(filtersSelector)

	const inputRef = useRef<HTMLInputElement>(null)

	const handlClear = () => {
		dispatch(setSearchValue(''))
		inputRef.current?.focus()
	}
	
	return (
		<div className={styles.search}>
			<svg
				className={styles.icon}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 64 64'
			>
				<g id='Layer_63' data-name='Layer 63'>
					<path d='M53.08,51l-9.84-9.84c10.24-11.82,1.63-30.7-14.15-30.64a18.63,18.63,0,0,0-18.61,18.6c-.06,15.79,18.82,24.4,30.64,14.16L51,53.08A1.5,1.5,0,0,0,53.08,51ZM13.48,29.08a15.62,15.62,0,0,1,15.61-15.6c20.69.86,20.69,30.35,0,31.21A15.62,15.62,0,0,1,13.48,29.08Z' />
				</g>
			</svg>
			<input
				ref={inputRef}
				className={styles.input}
				placeholder='Search...'
				value={searchValue}
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
			/>
			{searchValue && (
				<svg
					onClick={handlClear}
					className={styles.clearIcon}
					width='512'
					height='512'
					viewBox='0 0 512 512'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M84.9407 448.942C78.6923 455.19 68.5616 455.19 62.3132 448.942C56.0649 442.693 56.0649 432.563 62.3132 426.314L233 255.628L62.3132 84.9417C56.0649 78.6933 56.0649 68.5626 62.3132 62.3142C68.5616 56.0658 78.6923 56.0658 84.9407 62.3142L255.627 233.001L426.313 62.3142C432.562 56.0658 442.692 56.0658 448.941 62.3142C455.189 68.5626 455.189 78.6933 448.941 84.9417L278.254 255.628L448.941 426.314C455.189 432.563 455.189 442.693 448.941 448.942C442.692 455.19 432.562 455.19 426.313 448.942L255.627 278.255L84.9407 448.942Z'
						fill='black'
					/>
				</svg>
			)}
		</div>
	)
}

export default Search
