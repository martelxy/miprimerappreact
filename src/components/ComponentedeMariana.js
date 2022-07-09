import React, {useState} from 'react';


function ComponentedeMariana({children}){
     
    const [isOpen, setIsOpen]= useState(false);

    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen)
    }
    return(
        <div>Mi primer componente en React 
            <br></br>
             {isOpen.toString()}
            <br/>
            <button onClick={toggleIsOpen}>{isOpen ? "cerrar" : "abrir"}</button>
            {children}
        </div>
    );
}


export default ComponentedeMariana;