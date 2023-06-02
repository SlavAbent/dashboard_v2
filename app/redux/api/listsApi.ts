'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const listsApi = createApi({
	reducerPath: 'listsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001/' }),
	endpoints: build => ({
		getGoods: build.query<any, void>({
			query: () => `lists?_expand=color&_embed=tasks`,
		}),
	}),
})

export const { useGetGoodsQuery } = listsApi
