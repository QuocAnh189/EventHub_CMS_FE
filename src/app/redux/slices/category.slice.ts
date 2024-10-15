import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//interface
import { ICategory } from '@shared/interfaces/category/model'

export const CategorySliceKey = 'category'

type InitialType = {
  categories: ICategory[]
}

const initialState = {
  categories: []
} as InitialType

const categorySlice = createSlice({
  name: CategorySliceKey,
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    },

    addCategories: (state, action: PayloadAction<ICategory>) => {
      state.categories.push(action.payload)
    },

    updateCategories: (state, action: PayloadAction<ICategory>) => {
      state.categories = state.categories.filter((category) =>
        category.id === action.payload.id ? action.payload : category
      )
    },

    removeCategories: (state, action: PayloadAction<ICategory>) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload.id)
    }
  }
})

export const { setCategories } = categorySlice.actions

const categoryReducer = categorySlice.reducer
export default categoryReducer
