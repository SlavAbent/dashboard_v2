'use client'

import React from 'react'
import ClientOnly from '@/app/components/ClientOnly'
import Aside from '@/app/components/mainComponents/Aside/Aside'
import Navbar from '@/app/components/mainComponents/Navbar/Navbar'
import { Providers } from '@/app/redux/provider'

const Main = ({ children }: any) => {
	return (
		<div>
			<Providers>
				<ClientOnly>
					<div className='flex items-start w-full h-screen bg-gray-800'>
						<Aside />
						<div className='flex items-start w-full h-screen'>
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
