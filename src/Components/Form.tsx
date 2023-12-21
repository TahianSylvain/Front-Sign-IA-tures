import { motion } from 'framer-motion'
import React, { useState } from "react"
import axios from "axios"
import { useReducer } from "react"
import { reducer } from './FormREDUCER'


export function Formular() {
  // const [email, setEmail] = useState('')
  const [email, dispatch] = useReducer(reducer, '')
  const [owner, setOwner] = useState('')

  const handleMailer = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    dispatch({type: 'extend', event: e}) 
  }

  const handleOwning = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    setOwner(e.target.value)
  }

  const handleSubmit = async (
          event: React.FormEvent<HTMLFormElement>
      ) => {
      event.preventDefault();
      const url = 'http://localhost:8000/api/landing/';
      const data = { username: owner, email: email};
      
      try {
        const response = await axios.post(url, data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    return <div className="login-dark"> 
      <form method='post' className="card card-primary-dark border-19"
         onSubmit={handleSubmit} id='carding'>
        <fieldset className="my-3"> 
            <motion.input type="text" name="name" id="name" value={owner}
              initial={{opacity:0, x: +250}} animate={{opacity: 1, x: 0}}
              transition={{delay: 0.2, type: "spring", stiffness: 150}}
            placeholder=' Name' className="inputer" onChange={handleOwning}/>
        </fieldset>
        <fieldset className="my-3">
            <motion.input type="email" placeholder=' Gmail' value={email}  id="spam"
              initial={{opacity: 0, x: +250}} animate={{opacity:1, x: 0}}
               transition={{delay: 0.4, type: "spring", stiffness: 150}}
              name="spam" className="inputer" onChange={handleMailer}/>
        </fieldset>
        <motion.button id='bouton' type='submit' whileHover={{
            scale: 1.1, textShadow: "0px 0px 8px rgb(28, 62, 115)", 
            boxShadow: "0px 0px 8px rgb(28, 62, 115)"}}
            initial={{opacity:0}} animate={{opacity: 1}}
            transition={{delay: 1.5, duration: 1.2}}>
          Sign
        </motion.button>
      </form>
    </div>
}
