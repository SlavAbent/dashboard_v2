'use client'

import { configureStore } from '@reduxjs/toolkit'
import panelsSlice from '../redux/panels/panelsSlice'

import { listsApi } from './api/listsApi'
import { colorsApi } from './api/colorsApi'

export const store = configureStore({
	reducer: {
		panels: panelsSlice,

		[listsApi.reducerPath]: listsApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(listsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
