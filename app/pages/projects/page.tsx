'use client'

import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { useGetGoodsQuery } from '@/app/redux/api/listsApi'
import { isEmpty, uniqueId } from 'lodash'
import { List } from '@/app/pages/projects/types/types'
import ProjectsRow from '@/app/pages/projects/ProjectsRow/ProjectsRow'

const ProjectsPage = () => {
	const togglePanel = useSelector((state: RootState) => state.panels.isActiveProjects)
	const { data = [], isLoading } = useGetGoodsQuery()

	const list = useMemo(() => {
		if (isLoading && isEmpty(data)) {
			return <p>Loading...</p>
		}

		return (
			data &&
			data.map((item: List) => {
				const { id, name, href } = item
				return (
					<div
						key={uniqueId(`list_${id}`)}
						className={`
						 transition-all
						 duration-300
						 ease-out
						 mb-6
						 ${togglePanel ? 'opacity-100 w-auto pl-2' : 'opacity-0 w-0'}
						`}
					>
						<ProjectsRow
							data={item.color}
							rowName={name}
							href={href}
							togglePanel={togglePanel}
						/>
					</div>
				)
			})
		)
	}, [data, isLoading, togglePanel])

	return (
		<>
			<div className={`
				flex 
				flex-col 
				items-start
				bg-gray-900 
				h-full 
				p-6
				transition-all
				duration-300
				ease-out
				${togglePanel ? 'w-[300px]' : 'transform -translate-x-[0px] p-0 pt-6 overflow-hidden opacity-0 pointer-events-none'}
			`}>
				<div
					className={`
						relative
						flex
						justify-between
						w-full
						mb-6
					`}
				>

					<p
						className={`
						 transition-all
						 duration-300
						 ease-out
						 ${togglePanel ? 'opacity-100 w-auto pl-2' : 'opacity-0 w-0'}
						 text-slate-50 pl-2
						 pointer-events-none
						`}
					>
						Проекты
					</p>
					<span className="text-white">{ data && data.length }</span>
				</div>
				<div className='flex flex-col items-start'>{list}</div>
			</div>

		</>
	)
}
export default ProjectsPage
