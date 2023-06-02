import { Routes } from '@/app/types/types'
import {
	IoAccessibilityOutline,
	IoChatbubbleEllipsesOutline,
	IoCubeOutline,
	IoRocketOutline,
	IoSettingsOutline,
} from 'react-icons/io5'

export const routes: Routes[] = [
	{
		name: 'Projects',
		icon: (
			<IoCubeOutline
				size={24}
				color='#ffffff'
			/>
		),
		href: '/projects',
	},
	{
		name: 'Profile',
		icon: (
			<IoAccessibilityOutline
				size={24}
				color='#ffffff'
			/>
		),
		href: '/profile',
	},
	{
		name: 'UI',
		icon: (
			<IoRocketOutline
				size={24}
				color='#ffffff'
			/>
		),
		href: '/ui',
	},
	{
		name: 'Chat',
		icon: (
			<IoChatbubbleEllipsesOutline
				size={24}
				color='#ffffff'
			/>
		),
		href: '/chat',
	},
	{
		name: 'Settings',
		icon: (
			<IoSettingsOutline
				size={24}
				color='#ffffff'
			/>
		),
		href: '/settings',
	},
]
