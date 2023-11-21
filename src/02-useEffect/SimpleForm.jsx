import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email:'martin@google.com'
    })

    const {username,email} = formState;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setformState({
            ...formState,
            [name]:value //[name] esta relacionado con los dos input ya que tienen ese atributo el cual tiene los mismos nombres que lo que hay dentro del formState y le ponemos el value ya que value es = a las variables del formState y va cambiando
        })
    }


    useEffect(() => {
    //   console.log('useEffect called!')
    
      
    },[]); //Si en el segundo parametro solo pongo [] el useEffect solo se va a llamar cuando se renderiza el componente es decir una unica vez
    
    useEffect(() => {
        // console.log('formState changed')
      
        
      },[formState]);

      useEffect(() => {
        // console.log('email changed')
      
        
      },[email]);

      

  return (

    <>
    
    <h1>SimpleForm</h1>
    <hr />

    <input 
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value= {username}
    onChange={onInputChange}
    
    />

<input 
    type="email"
    className="form-control mt-2"
    placeholder="martin@google.com"
    name="email"
    value = {email}
    onChange={onInputChange}
    
    />

    {
        (username === 'strider2') && <Message/>
    }
    
    </>

  )
}
