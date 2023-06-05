import { useCallback, useState } from 'react'

export const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
	const [isToggle, setIsToggle] = useState(!!defaultValue)

	const toggleValue = useCallback(() => setIsToggle((prevValue) => !prevValue), [])

	return [ isToggle, toggleValue ]
}
