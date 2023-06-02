'use client'

import React from 'react'
import UserLinks from '@/app/components/UserLinks/UserLinks'
import Logo from '@/app/components/Icons/Logo'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { routes } from '@/app/routes'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSwitchAside } from '@/app/redux/panels/panelsSlice'
import { RootState } from '@/app/redux/store'

const theme = 'dark'

const Aside = () => {
	const dispatch = useDispatch()
	const toggleAsidePanel = useSelector((state: RootState) => state.panels.isActiveAside)

	return (
		<div
			className={`
				${toggleAsidePanel ? 'w-[150px]' : 'w-auto'}
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
				className="flex items-start "
				size={36}
				color='#ffffff'
				onClick={() => dispatch(toggleSwitchAside())}
			/>
			<div className='flex flex-grow flex-col'>
				<UserLinks routes={routes} />
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
