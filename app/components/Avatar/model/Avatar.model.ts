import React from 'react'

export type statusType = 'success' | 'warning' | 'error'

export interface IAvatarProps {
	src?: string | null | undefined
	className?: string
	size?: number
	title?: string
	status?: statusType
	onClick?: (event: React.MouseEvent) => void
}
