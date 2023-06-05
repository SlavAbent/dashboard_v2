import { FC, memo, useMemo } from 'react'
import { IBadge } from '@/app/components/ui/Badge/model/Badge.model'
const Badge: FC<IBadge> = (
	{
		// id,
		// color,
		size = 8,
		onClick,
		className,
		// selectedColor,
		style
	}
) => {
	const sizeBadge = `${size}px`

	// TODO add custom checkbox
	// const activeBadge = `${selectedColor === id ? 'active' : 'default'}`

	const badgeStyle = useMemo(() => {
		return {
			width: sizeBadge,
			height: sizeBadge,
			color: style,
		}
	}, [sizeBadge, style])

	// TODO refactor this component

	const memoStyle = useMemo(() => {
		return `
		${className === 'badge--grey' && `bg-[#c9d1d3]`}
		${className === 'badge--lime' && `bg-[#b6e6bd]`}
		${className === 'badge--purple' && `bg-[#c355f5]`}
		${className === 'badge--black' && `bg-[#08001a]`}
		${className === 'badge--red' && `bg-[#ff6464]`}
		${className === 'badge--green' && `bg-[#42b883]`}
		${className === 'badge--blue' && `bg-[#64c4ed]`}
		${className === 'badge--pink' && `bg-[#ffbbcc]`}
	 `
	}, [className])

	return (
		<div
			className={`
			${memoStyle}
		  flex 
		  items-center 
		  justify-center 
		  w-[8px] 
		  h-[8px] 
		  mr-2 
		  rounded-full 
		  cursor-pointer
		`}
			style={badgeStyle}
			onClick={onClick}
		/>
	)
}

export default memo(Badge)
