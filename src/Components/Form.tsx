import { useState } from "react"

type FormProp = {
    name?: string
}

export function Formular(props:FormProp) {
    const [sign, setSign] = useState("")

    return <form method='post' className="card">
        <fieldset className="my-3">
            <label htmlFor="name" className="form-label">
                Name:
            </label>
            <input type="text" name="name" id="name" 
            placeholder='Your name' className="mx-2" />
        </fieldset>
        <fieldset className="my-3">
            <label htmlFor="spam" className="form-label">Email: </label>
            <input type="email" placeholder='Your mail'
                name="spam" className="mx-2" id="spam" />
        </fieldset>
        <button type='submit'>Sign</button>
  </form>
}