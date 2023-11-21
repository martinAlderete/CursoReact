import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        setcounter(counter + value);
    }

    const reset = () => {
        setcounter(initialValue)
    }

    const decrement = (value = 1) => {
        if(counter === 0) return;
        setcounter(counter - value)
    }


    return{
        counter,
        increment,
        reset,
        decrement
    }
}