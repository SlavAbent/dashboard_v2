import React, { Dispatch, FC } from 'react'
import { Routes } from '@/app/types/types'
import Link from 'next/link'
import { isEmpty } from 'lodash'
import { usePathname } from 'next/navigation'
import { AnyAction } from 'redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'

interface UserLinksProps {
	routes: Routes[]
}

const UserLinks: FC<UserLinksProps> = ({ routes }) => {
	const pathname = usePathname()

	const toggleAsidePanel = useSelector((state: RootState) => state.panels.isActiveAside)

	if (isEmpty(routes)) {
		return null
	}

	return (
		<div className='pt-6'>
			{ routes && routes.map((route, index) => {
				const { href, icon, name } = route
				return (
					<div
						className={`pb-3 pt-3 ${pathname === href ? 'border-b-2 border-pink-500' : ''}
						`}
						key={index}
					>
						<Link href={href}>
							<span className='flex items-center text-white p-4 pb-0 pt-0'>
								<i className='pr-2'>{icon}</i>
								<p
									className={`
									transition-all
				  					duration-300
				  					ease-out
				  					${toggleAsidePanel ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
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

export default UserLinks
