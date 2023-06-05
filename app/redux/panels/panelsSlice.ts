'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isActiveProjects: false,
	isActiveAside: false,
}

export const panelsSlice = createSlice({
	name: 'panels',
	initialState,
	reducers: {
		toggleSwitchProjects: state => {
			state.isActiveProjects = !state.isActiveProjects
		},
		toggleSwitchAside: state => {
			state.isActiveAside = !state.isActiveAside
		},
	},
})

export const { toggleSwitchProjects, toggleSwitchAside } = panelsSlice.actions

export default panelsSlice.reducer
