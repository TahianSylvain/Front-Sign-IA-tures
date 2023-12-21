import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/App.css"
import { Formular } from './Components/Form'
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from 'framer-motion'


function App() {
  return <>
      <motion.div
          initial={{y: -130}} animate={{ y:0 }}
          transition={{delay: 0, duration:0.5}}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </motion.div>
      <section>
        <div className="container">
          <div className="col">
            <h2 className='my-2' > Vite + React</h2>
            <h2 className='my-2' > Vite + React</h2>
          </div>
        </div>        
      </section>
      <div className="container">
        <div className="row justify-content-center m-5">
          <div className="col" id="__colorant__">
            <Formular></Formular>
          </div>
        </div>
      </div>
      <motion.p className="read-the-docs"
            initial={{y: +130}} animate={{y:0}}
            transition={{delay: 1.5}}>
        Copy rights belongs to the  
        <a href="https://github.com/TahianSylvain/Sign-IA-tures/LICENSE.md"
         target="_blank" rel="noopener noreferrer"> MIT License!</a>
      </motion.p>
      <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    </>
}

export default App
