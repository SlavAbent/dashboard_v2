import React, { FC } from 'react'
import { IoLogoReact } from 'react-icons/io5'
import { IconsModel } from '@/app/components/ui/Icons/Icons.model'

const Logo: FC<IconsModel> = props => {
	const { color, size, onClick, className } = props
	return (
		<div
			className={`cursor-pointer p-4 pb-0 ${className}`}
			onClick={onClick}
		>
			<IoLogoReact
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Logo
