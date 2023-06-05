import React, { FC } from 'react'
import NotificationPanel from '@/app/components/ui/NotificationPanel/NotificationPanel'
import Calendar from '@/app/components/ui/Icons/Calendar'
import Time from '@/app/components/ui/Icons/Time'
import SearchPanel from '@/app/components/ui/SearchPanel'
import { Avatar } from '@/app/components/ui/Avatar/Avatar'
import {Dropdown} from '@/app/components/ui/Dropdown/Dropdown'
import {useToggle} from '@/app/utils/hooks/useToggle'

export interface NavbarProps {
	title?: string
}
const Navbar: FC<NavbarProps> = props => {
	const { title } = props

	const [isToggle, toggleValue] = useToggle(false)

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
				<Avatar
					className="relative"
					src={'/assets/avatar.jpeg'}
					onClick={toggleValue}
				>
					<div className="absolute top-10 right-0">
						<Dropdown isToggle={isToggle} />
					</div>
				</Avatar>

			</div>
		</div>
	)
}

export default Navbar
