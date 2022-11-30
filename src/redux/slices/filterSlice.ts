import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface FilterSliceState {
    categoryId: number;
    sort: string;
    searchValue:string;
}

interface FilterSetFunc {
    categoryId: number;
    sort: string;
}

const initialState:FilterSliceState = {
    categoryId: 0,
    sort: 'default',
    searchValue:''
}

export const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategoryId: (state, action:PayloadAction<number> ) => {
            state.categoryId = action.payload
        },
        setSortType: (state, action:PayloadAction<string>) => {
            state.sort = action.payload
        },
        setFilters:(state,action:PayloadAction<FilterSetFunc>) => {
            if(Object.keys(action.payload).length){
            state.categoryId = Number(action.payload.categoryId)
            state.sort=action.payload.sort}
            else{
                state.categoryId = 0;
                state.sort = 'deafult'
            }
        },
        setSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})

export const filtersSelector = (state:RootState) => state.filter

export const {setCategoryId, setSortType, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer