import { useState } from "react"
import { validate } from "./validation"
import style from './Form.module.css'

const Form = ({login}) => {
    const [ userData, setUserData ] = useState({
        username: '',
        password: ''
    })

    const [ errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (evento)=> {
        evento.preventDefault()
        login(userData)
    }
    const handleInputChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validate(
            {...userData, 
            [evento.target.name] : evento.target.value
            }))
    }

    return(
            <form 
                onSubmit={handleSubmit}
                className={style.container}
            >
                <div>
                    <label>Username:</label>
                    <input 
                        type="email" 
                        value={userData.username}
                        name="username"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                       errors.username ? (
                        <span>{errors.username}</span>
                       ) :
                       ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={userData.password}
                        name="password"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                        errors.password ? (
                            <span>{errors.password}</span>
                        ) :
                        ''
                    }
                </div>
                <button type="submit">Log in</button>
            </form>
        
    )
}


export default Form