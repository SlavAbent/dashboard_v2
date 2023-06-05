import React, { FC } from 'react'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { IconsModel } from '@/app/components/ui/Icons/Icons.model'

const Toggle: FC<IconsModel> = props => {
	const { color, size, onClick, className } = props
	return (
		<div
			className={className}
			onClick={onClick}
		>
			<AiOutlineAlignLeft
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Toggle
