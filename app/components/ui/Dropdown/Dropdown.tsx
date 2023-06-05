import React, {FC} from 'react'
import {routes} from '@/app/utils/routes'
import {Routes} from '@/app/utils/types/types'
import Link from 'next/link'
import {isEmpty, uniqueId} from 'lodash'

type DropdownRoutes = Omit<Routes, 'icon'>

const routeDropdown: DropdownRoutes[] = [
	{
		name: 'Profile',
		href: '/pages/profile',
	},
	{
		name: 'Chat',
		href: '/pages/chat',
	},
	{
		name: 'Settings',
		href: '/pages/settings',
	},
]

interface IDropDownProps {
	isToggle: boolean
}

export const Dropdown:FC<IDropDownProps> = ({ isToggle }) => {
	if (isEmpty(routes)) {
		return null
	}
	return (
		<div className={`
			${isToggle ? 'opacity-100' : 'opacity-0'} 
			flex 
			flex-col 
			items-center 
			p-2 
			bg-white 
			rounded-md 
			transition-all
			duration-150
			ease-out
		`}>
			{ !isEmpty(routeDropdown) && routeDropdown.map((route: DropdownRoutes) => {
				const {href, name} = route

				return (
					<div key={ uniqueId('dropdown_route--') }>
						<Link
							href={ href }
						>
							{ name }
						</Link>
					</div>
				)
			}) }
		</div>
	)
}
