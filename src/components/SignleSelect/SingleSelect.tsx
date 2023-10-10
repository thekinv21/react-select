import { FC, useEffect, useState } from 'react'

import Select from 'react-select'

const SingleSelect: FC = () => {
	const countries = [
		{ label: 'Turkey', value: 'turkish' },
		{ label: 'Russia', value: 'russian' },
		{ label: 'Uzbekistan', value: 'uzbekistan' },
		{ label: 'United State', value: 'usa' },
	]

	const [country, setCountry] = useState<string>('russian')

	const getValue = () => {
		return country ? countries.find(c => c.value === country) : ''
	}

	const handleChange = (newValue: any) => {
		setCountry(newValue.value)
	}

	useEffect(() => {
		console.log('selected', country)
	}, [country])

	return (
		<div className='flex flex-col gap-y-2 justify-center items-start w-full'>
			<label>Single Select</label>
			<Select
				className='w-full'
				options={countries}
				value={getValue()}
				onChange={handleChange}
			/>
		</div>
	)
}

export default SingleSelect
