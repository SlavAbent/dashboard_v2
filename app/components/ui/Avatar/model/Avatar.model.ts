import {MouseEventHandler, ReactNode} from 'react'

export type statusType = 'success' | 'warning' | 'error'

export interface IAvatarProps {
	src?: string | null | undefined
	className?: string
	size?: number
	title?: string
	status?: statusType
	onClick?: MouseEventHandler<HTMLDivElement>
	children?: ReactNode
}
