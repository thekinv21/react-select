import { FC } from 'react'
import Select from 'react-select'
import { useMultipleSelect } from './useMultipleSelect'

const MultipleSelect: FC = () => {
	const { getCountries, handleChange, countries } = useMultipleSelect()

	return (
		<div className='flex flex-col gap-y-2 justify-center items-start w-full'>
			<label>Multiple Select</label>
			<Select
				className='w-full'
				value={getCountries()}
				onChange={handleChange}
				options={countries}
				isMulti
			/>
		</div>
	)
}

export default MultipleSelect
