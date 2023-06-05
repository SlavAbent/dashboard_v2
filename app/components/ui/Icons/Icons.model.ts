export interface IconsModel {
	color?: string
	size?: string | number
	gap?: string | number
	onClick?: () => void
	className?: string
}

export interface TogglerProps extends IconsModel{
	toggle: boolean
}
