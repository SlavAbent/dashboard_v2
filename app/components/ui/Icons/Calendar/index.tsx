import React, { FC } from 'react'
import { IconsModel } from '@/app/components/ui/Icons/Icons.model'
import { BsCalendar4Week } from 'react-icons/bs'

const Calendar: FC<IconsModel> = props => {
	const { color, size } = props
	return (
		<div className='cursor-pointer'>
			<BsCalendar4Week
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Calendar
