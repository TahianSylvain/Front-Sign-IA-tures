import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/App.css"
import { Formular } from './Components/Form';
import "bootstrap/dist/css/bootstrap.min.css"
// import boot from "bootstrap/dist/js/bootstrap.min.js" 

function App() {
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
      <div className="container">
        <div className="row justify-content-center m-5">
          <div className="col">
            <Formular></Formular>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Copy rights are in the 
        <a href="https://github.com/TahianSylvain/Sign-IA-tures/LICENSE.md"
         target="_blank" rel="noopener noreferrer"> MIT License!</a>
      </p>
      <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    </>
}

export default App
