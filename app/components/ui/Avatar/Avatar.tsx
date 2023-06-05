'use client'

import React from 'react'
import { IAvatarProps } from './model/Avatar.model'
import Image from 'next/image'

export const Avatar: React.FC<IAvatarProps> = props => {
	const { src, size = 32, className, title, status = 'success', onClick } = props

	const sizeBox = size - 4
	const sizeInner = size - 8
	const sizeWrapper = size
	const sizeTitle = size / 2

	return (
		<div
			className={`${className} relative cursor-pointer`}
			onClick={onClick}
			style={{ width: sizeInner, height: sizeInner }}
		>
			<div
				className='rounded-full z-10000 overflow-hidden'
				style={{ width: sizeInner, height: sizeInner }}
			>
				{status && (
					<div
						className={`
                    ${status === 'success' ? 'bg-green-500' : 'bg-inherit'}
                    ${status === 'error' ? 'bg-rose-500' : 'bg-inherit'}
                    ${status === 'warning' ? 'bg-amber-500' : 'bg-inherit'}
                    absolute
                    -top-2
                    -right-1
                    w-[8px]
                    h-[8px]
                    rounded-full
                    z-1100
                  `}
					/>
				)}
				{src && (
					<Image
						className='w-full h-full m-auto object-cover overflow-hidden'
						src={src || '/assets/avatar.jpeg'}
						alt={title || 'avatar info'}
						width={sizeInner}
						height={sizeInner}
					/>
				)}
				{title && (
					<div
						className='w-full h-full m-[0 auto] object-cover'
						style={{ fontSize: sizeTitle }}
					>
						{title}
					</div>
				)}
			</div>
			<div
				className='absolute -top-1 -left-1 z-1001 rounded-full border-2 border-white-950'
				style={{ width: sizeWrapper, height: sizeWrapper }}
			>
				<div style={{ width: sizeBox, height: sizeBox }} />
			</div>
		</div>
	)
}
