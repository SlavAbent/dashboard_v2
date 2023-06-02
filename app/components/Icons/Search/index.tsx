import React, { FC } from 'react'
import { IconsModel } from '@/app/components/Icons/Icons.model'
import { CiSearch } from 'react-icons/ci'

const Search: FC<IconsModel> = props => {
	const { color, size } = props
	return (
		<div className='cursor-pointer'>
			<CiSearch
				size={size}
				color={color}
			/>
		</div>
	)
}

export default Search
