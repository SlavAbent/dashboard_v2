import React, { FC } from 'react'
import NotificationPanel from '@/app/components/ui/NotificationPanel/NotificationPanel'
import Calendar from '@/app/components/ui/Icons/Calendar'
import Time from '@/app/components/ui/Icons/Time'
import SearchPanel from '@/app/components/ui/SearchPanel'
import { Avatar } from '@/app/components/ui/Avatar/Avatar'

export interface NavbarProps {
	title?: string
}
const Navbar: FC<NavbarProps> = props => {
	const { title } = props
	return (
		<div
			className='
	 	w-full
	 	gap-4
	 	p-6
		flex
		flex-row
		items-center
		justify-between
	 '
		>
			<div className='flex items-center gap-8'>
				<p className='text-white'>{title}</p>
			</div>
			<div className='flex items-center gap-8'>
				<SearchPanel />
				<Calendar
					size={24}
					color='#ffffff'
				/>
				<NotificationPanel />
				<Time
					size={24}
					color='#ffffff'
				/>
				<Avatar src={'/assets/avatar.jpeg'} />
			</div>
		</div>
	)
}

export default Navbar
