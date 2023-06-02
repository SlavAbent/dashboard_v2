export interface Color {
	id: number
	hex: string
	name: string
}

export interface List {
	id: number
	colorId: number
	name: string
	href: string
	color: Color
}
