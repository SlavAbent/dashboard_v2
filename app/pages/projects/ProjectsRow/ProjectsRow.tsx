'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Color } from '@/app/pages/projects/types/types'
import Badge from '@/app/components/ui/Badge/Badge'

interface ProjectRowProps {
	href: string
	rowName: string
	data: Color
	togglePanel?: boolean
}

const ProjectsRow: FC<ProjectRowProps> = props => {
	const { href, rowName, data, togglePanel } = props
	const router = useRouter()
	const { id, hex, name } = data
	// const className = cn('badge', { [`badge--${name}`]: href}, 'default') // Todo fix the styles problem in tailwindcss

	const styledBadge = !name ? hex : '#000000' // add !className

	return (
		<div className='flex items-center'>
			<Badge
				style={styledBadge}
				id={id}
				className={`badge--${name}`}
				size={12}
				color='custom--badge'
			/>
			<button onClick={() => router.push(`projects/${href}`)}>
				<span className={`${togglePanel ? 'block text-white' : 'hidden'}`}>{rowName}</span>
			</button>
		</div>
	)
}

export default ProjectsRow
