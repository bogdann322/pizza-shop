import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

export const fetchPizzas = createAsyncThunk<Pizza[],SearchPizzaParams>(
	'pizza/fetchPizzasStatus',
	async ({category, sortType}) => {
		const { data } = await axios.get<Pizza[]>(
			`https://635a95f038725a1746cac0d5.mockapi.io/items?${category}${sortType}`
		)
		return data;
	}
)

export type SearchPizzaParams = {
	category: string;
	sortType: string;
	searchValue?: string;
}

type Pizza = {
	id:string;
	title:string; 
	price:number; 
	imageUrl:string; 
	sizes:number[]; 
	types:number[];
	rating: number;
}

interface PizzaSliceState {
	items: Pizza[];
	status: 'loading' | 'success' | 'error'
}

const initialState:PizzaSliceState = {
	items: [],
	status: 'loading',
}

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems: (state, action)=> {
			state.items = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.items = []
			state.status = 'loading'
		} )
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = 'success'
		} )
		builder.addCase(fetchPizzas.rejected, (state) => {
			state.status = 'error'
			state.items = []
		} )
	  },
})

export const pizzasSelector = (state:RootState) => state.pizzas

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
