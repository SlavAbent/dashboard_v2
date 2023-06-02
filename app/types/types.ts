import { ReactElement } from 'react'

export interface Route {
	name: string
	icon: ReactElement
}
export interface Routes {
	name: string
	icon: ReactElement
	href: string
}
