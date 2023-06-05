import { MouseEvent } from 'react'

export type classNameType = 'active' | 'danger' | 'success' | 'default'

export interface IBadge {
	style?: string
	id?: number
	size: number
	color?: string
	className?: classNameType | string
	onClick?: (event: MouseEvent) => void
	children?: any
	selectedColor?: number
}
