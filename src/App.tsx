import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./assets/App.css"

function App() {
  const [sign, setSign] = useState("")


  return <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form method='post' className="card">
        <input type="text" name="name" id="name" 
          placeholder='Your mail' value={sign} />
        <button type='submit'>
          Sign
        </button>
        <fieldset>
          <input type="email" placeholder='Your mail'
            name="spam" id="spam" />
        </fieldset>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </form>
      <p className="read-the-docs">
        Copy rights are in the 
        <a href="https://github.com/TahianSylvain/Sign-IA-tures/LICENSE.md"
         target="_blank" rel="noopener noreferrer"> MIT License!</a>
      </p>
    </>
}

export default App
