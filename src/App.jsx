import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClubRegistrationForm from './Pages/ClubRegistrationForm/ClubRegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ClubRegistrationForm></ClubRegistrationForm>
    </>
  )
}

export default App
