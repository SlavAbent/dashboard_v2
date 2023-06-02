import React, { FC } from 'react'
import { CiClock1 } from 'react-icons/ci'
import { IconsModel } from '@/app/components/Icons/Icons.model'

const Time: FC<IconsModel> = props => {
	const { color, size } = props
	return (
		<div className='cursor-pointer'>
			<CiClock1
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Time
