import { useEffect, useState } from 'react'
import { OnChangeValue } from 'react-select'

interface IOption {
	label: string
	value: string
}

export const useMultipleSelect = () => {
	// options
	const countries: IOption[] = [
		{ label: 'Turkey', value: 'turkish' },
		{ label: 'Russia', value: 'russian' },
		{ label: 'Uzbekistan', value: 'uzbekistan' },
		{ label: 'United State', value: 'usa' },
	]

	const [currentCountries, setCurrentCountries] = useState(['turkish', 'usa'])

	const getCountries = () => {
		return currentCountries
			? countries.filter(c => currentCountries.indexOf(c.value) >= 0)
			: []
	}

	const handleChange = (newValue: OnChangeValue<IOption, boolean>) => {
		// burada newValue tipini zorunlu olarak kendimiz vermemiz gerekecektir
		setCurrentCountries((newValue as IOption[]).map(c => c.value))
	}

	useEffect(() => {
		console.log('Selected countries', currentCountries)
	}, [currentCountries])

	return {
		getCountries,
		handleChange,
		countries,
	}
}
