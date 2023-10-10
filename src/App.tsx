import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	return (
		<>
			<div>
				<a>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1 className='text-green-400'>Vite + React</h1>
		</>
	)
}

export default App
