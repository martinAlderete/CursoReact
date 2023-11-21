import { useCounter,useFetch,useForm } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";



export const Layout = () => {

  const {counter,increment,decrement,reset} = useCounter(0);
    const {data,isLoading,hasError} = useFetch(`https://fakestoreapi.com/products`);

    // console.log(counter,data);

    // const {description,title} = !!data && data; Se hace esto ya que data viene predefinido en null por lo tanto no se podria desestructurar
       const {description,title} = !!data && data[counter]; //El (!!data es para saber si tiene un elemento el array) y si lo tiene entonces se toma como valor la data[0]
  

  return (
    <>
        <h1>Product Descriptions</h1>
        <hr />
        
      {
        (isLoading)  ? (<LoadingQuote/>) : (<Quote description={description} title={title}/>)
      }

       

      
        <button className="btn btn-primary" disabled = {isLoading} onClick={() => increment()} >Next quote</button>

    
    
    
    
    
    
    </>
  )
}
