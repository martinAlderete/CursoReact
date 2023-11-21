import { useEffect } from "react"
import { useForm } from "../hooks/useForm";




export const FormWithCustomHook = () => {


    const {formState,onInputChange,username,email,password,onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    });

    // const {username,email,password} = formState;

    // {
    //     username: '',
    //     email:'',
    //     password:''
    // }


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
    
    <h1>Formulario con custom hook</h1>
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
    placeholder="Contraseña@google.com"
    name="email"
    value = {email}
    onChange={onInputChange}
    
    />

<input 
    type="password"
    className="form-control mt-2"
    placeholder="martin@google.com"
    name="password"
    value = {password}
    onChange={onInputChange}
    
    />


    <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    
    </>

  )
}
