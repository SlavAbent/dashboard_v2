import React, { useMemo } from 'react'
import Toggle from '@/app/components/Icons/Toggler'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { toggleSwitchProjects } from '@/app/redux/panels/panelsSlice'
import { useGetGoodsQuery } from '@/app/redux/api/listsApi'
import { isEmpty, uniqueId } from 'lodash'
import { List } from '@/app/components/mainComponents/Projects/types/types'
import ProjectsRow from '@/app/components/mainComponents/Projects/ProjectsRow/ProjectsRow'

const Projects = () => {
	const togglePanel = useSelector((state: RootState) => state.panels.isActiveProjects)
	const dispatch = useDispatch()
	const { data = [], isLoading, isError } = useGetGoodsQuery()

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
						className='mb-3'
					>
						<ProjectsRow
							data={item.color}
							rowName={name}
							href={href}
						/>
					</div>
				)
			})
		)
	}, [data, isLoading])

	return (
		<div className='flex flex-col items-start bg-gray-900 h-full p-6'>
			<div
				className={`
				 ${ togglePanel
					? 'w-[300px] flex flex-row items-start justify-between'
					: 'w-[0px] flex flex-col items-center justify-start'
				 } 		
				 transition-width
				 duration-300
				 mb-6
			`}
			>
				<Toggle
					size={18}
					color='#ffffff'
					className='cursor-pointer'
					onClick={() => dispatch(toggleSwitchProjects())}
				/>
				<p
					className={`
					  ${togglePanel ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
					  transition
					  duration-300
					  text-slate-50 pl-2
					  pointer-events-none
			    `}
				>
					Projects
				</p>
			</div>
			<div className='flex flex-col items-start'>{list}</div>
		</div>
	)
}

export default Projects
