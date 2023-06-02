'use client'

import React from 'react'
import ClientOnly from '@/app/components/ClientOnly'
import Aside from '@/app/components/mainComponents/Aside/Aside'
import Navbar from '@/app/components/mainComponents/Navbar/Navbar'
import { Providers } from '@/app/redux/provider'
import { usePathname } from 'next/navigation'

const Main = ({ children }: any) => {
	const pathname = usePathname()
	return (
		<div>
			<Providers>
				<ClientOnly>
					<div className='flex flex-row items-start w-full h-screen bg-gray-800'>
						<Aside />
						<div
							className={`${
								pathname === '/projects' ? 'flex-row' : 'flex-col'
							} flex items-start w-full h-screen`}
						>
							<div className='h-full'>{children}</div>
							<Navbar title='Welcome back, Slava' />
						</div>
					</div>
				</ClientOnly>
			</Providers>
		</div>
	)
}

export default Main
