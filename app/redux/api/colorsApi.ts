'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const colorsApi = createApi({
	reducerPath: 'colorsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://localhost:4001/',
	}),
	endpoints: build => ({
		getColors: build.query<any, void>({
			query: () => `colors`,
		}),
	}),
})

export const { useGetColorsQuery } = colorsApi
