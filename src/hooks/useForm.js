import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
    const [formState, setformState] = useState(initialForm);

   

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setformState({
            ...formState,
            [name]:value //[name] esta relacionado con los dos input ya que tienen ese atributo el cual tiene los mismos nombres que lo que hay dentro del formState y le ponemos el value ya que value es = a las variables del formState y va cambiando
        })
    }

    const onResetForm = () => {
        setformState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }


}
