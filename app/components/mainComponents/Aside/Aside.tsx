'use client'

import React from 'react'
import AsideRoutes from '@/app/components/Routes/AsideRoutes'
import Logo from '@/app/components/ui/Icons/Logo'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { routes } from '@/app/utils/routes'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSwitchAside, toggleSwitchProjects } from '@/app/redux/panels/panelsSlice'
import { RootState } from '@/app/redux/store'
import Toggle from '@/app/components/ui/Icons/Toggler'

const theme = 'dark'

const Aside = () => {
	const dispatch = useDispatch()
	const toggleAsidePanel = useSelector((state: RootState) => state.panels.isActiveAside)

	return (
		<div
			className={`
				${toggleAsidePanel ? 'w-[150px]' : 'w-[68px]'}
				flex
				flex-col
				bg-gray-950
				h-full
				gap-4
				transition-width
				duration-300
				ease-out
			`}
		>
			<Logo
				className='flex items-center '
				size={36}
				color='#ffffff'
				onClick={() => dispatch(toggleSwitchAside())}
			/>
			<Toggle
				size={20}
				color='#ffffff'
				className='cursor-pointer flex items-center justify-center'
				onClick={() => dispatch(toggleSwitchProjects())}
			/>
			<div className='flex flex-grow flex-col'>
				<AsideRoutes routes={routes} />
			</div>
			<div className='cursor-pointer p-4 flex justify-center items-center'>
				{theme === 'dark' ? (
					<IoMoonOutline
						size={24}
						color='#ffffff'
					/>
				) : (
					<IoSunnyOutline
						size={24}
						color='#ffffff'
					/>
				)}
			</div>
		</div>
	)
}

export default Aside
