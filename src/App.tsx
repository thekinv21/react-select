import './App.css'
import reactLogo from './assets/react.svg'
import CustomizeSelect from './components/CustomizeSelect/CustomizeSelect'
import MultipleSelect from './components/MultipleSelect/MultipleSelect'
import SingleSelect from './components/SignleSelect/SingleSelect'
import viteLogo from '/vite.svg'

function App() {
	return (
		<>
			<div className='flex justify-center gap-x-2 items-center'>
				<a>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1 className='mb-5'>Vite + React</h1>

			<div className='w-[450px] mb-5 '>
				<SingleSelect />
			</div>

			<div className='w-[450px] mb-5 '>
				<MultipleSelect />
			</div>

			<div className='w-[450px] mb-5 '>
				<CustomizeSelect />
			</div>
		</>
	)
}

export default App
