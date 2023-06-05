import React, { FC } from 'react'
import { IconsModel } from '@/app/components/ui/Icons/Icons.model'
import { IoNotificationsOutline } from 'react-icons/io5'

const Notification: FC<IconsModel> = props => {
	const { color, size } = props
	return (
		<div className='cursor-pointer'>
			<IoNotificationsOutline
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Notification
