import { FC } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import './CustomizeSelect.scss'
import { useCustomizeSelect } from './useCustomizeSelect'

const CustomizeSelect: FC = () => {
	const { getCountries, handleChange, countries } = useCustomizeSelect()

	const animatedComponent = makeAnimated()

	return (
		<div className='flex flex-col gap-y-2 justify-center items-start w-full'>
			<label>Customized Select</label>
			{/* ilk önce global prefix tanımlıyoruz custom-select  */}
			<Select
				classNamePrefix='custom-select'
				className='w-full'
				value={getCountries()}
				onChange={handleChange}
				options={countries}
				placeholder='Select Coutries'
				isMulti
				components={animatedComponent}
			/>
		</div>
	)
}

export default CustomizeSelect
