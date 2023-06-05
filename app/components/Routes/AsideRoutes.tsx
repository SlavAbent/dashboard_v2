import React, { FC } from 'react'
import { Routes } from '@/app/utils/types/types'
import Link from 'next/link'
import { isEmpty } from 'lodash'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'

interface UserLinksProps {
	routes: Routes[]
}

const AsideRoutes: FC<UserLinksProps> = ({ routes }) => {
	const pathname = usePathname()

	const toggleAsidePanel = useSelector((state: RootState) => state.panels.isActiveAside)

	if (isEmpty(routes)) {
		return null
	}

	return (
		<div className='pt-6'>
			{routes &&
				routes.map((route, index) => {
					const { href, icon, name } = route
					return (
						<div
							className={`pb-3 pt-3 ${
								pathname === href ? 'border-b-2 border-pink-500' : ''
							}`}
							key={index}
						>
							<Link href={href}>
								<span className='flex text-white p-4 pb-0 pt-0'>
									<i
										className={`pl-1
				  					${toggleAsidePanel ? 'items-start' : 'items-center'}
								`}
									>
										{icon}
									</i>
									<p
										className={`
									transition-all
				  					duration-300
				  					ease-out
				  					${toggleAsidePanel ? 'opacity-100 w-auto pl-2' : 'opacity-0 w-0'}
								`}
									>
										{name}
									</p>
								</span>
							</Link>
						</div>
					)
				})}
		</div>
	)
}

export default AsideRoutes
