import React, { FC } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { IconsModel } from '@/app/components/Icons/Icons.model'

const Toggle: FC<IconsModel> = props => {
	const { color, size, onClick, className } = props
	return (
		<div
			className={className}
			onClick={onClick}
		>
			<CiMenuBurger
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Toggle
