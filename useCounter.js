import { useState } from "react";



export const useCounter = ( initialValue =  10 ) => {

const [counter, setCounter] = useState( initialValue );

const increment = ( value = 1 ) => {

    setCounter( ( current ) => current + value );
}

const decrement = ( value = 1 ) => {

 if ( counter === 0 ) return;
  setCounter( ( current ) => current - value );

}

const reset = () => {

    setCounter( initialValue );
}


    //el retorno de la función del hook puede ser un objeto, un booleano, un arreglo, lo que se necesite, etc.
    return {
        
        counter,
        increment,
        decrement,
        reset
    }

}
