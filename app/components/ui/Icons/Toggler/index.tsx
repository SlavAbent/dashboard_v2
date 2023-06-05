import React, { FC } from 'react'
import { TfiAngleDoubleRight, TfiLayoutColumn3 } from 'react-icons/tfi'
import {TogglerProps} from '@/app/components/ui/Icons/Icons.model'

const Toggle: FC<TogglerProps> = props => {
	const {
		color,
		size,
		onClick,
		className,
		toggle
	} = props

	return (
		<div className={className} onClick={onClick}>
			{ toggle ? (
				<TfiLayoutColumn3
					size={size}
					color={color}
				/>
			) : (
				<TfiAngleDoubleRight
					size={size}
					color={color}
				/>
			) }

		</div>
	)
}

export default Toggle
