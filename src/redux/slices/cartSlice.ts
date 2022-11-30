import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getItemsFromLS } from '../../utils/getItemsFromLS';
import { RootState } from '../store'

export type CartItem = {
	id:string;
	count: number;
	title:string;
	price:number; 
	imageUrl:string; 
	size:number; 
	type: string;
}

interface CartSliceState {
	totalPrice:number;
	items: CartItem[]
}

const { items, totalPrice } = getItemsFromLS()

const initialState:CartSliceState = {
	items,
	totalPrice,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action:PayloadAction<CartItem>) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({ ...action.payload, count: 1 })
			}

			state.totalPrice = calcTotalPrice(state.items)
		},
		minusItem: (state,action:PayloadAction<string>)=>{
			const findItem = state.items.find((obj) => obj.id === action.payload)

			if (findItem && findItem.count> 1) {
				findItem.count--
			} 
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},
		deleteItem: (state, action:PayloadAction<string>) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload)
		},
		removeAll: (state) => {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const cartSelector = (state: RootState) => state.cart
export const selectCartItemByID = (id:string) => (state:RootState) => state.cart.items.find((obj) => obj.id === id)

export const { addItem, deleteItem, removeAll, minusItem } = cartSlice.actions

export default cartSlice.reducer
