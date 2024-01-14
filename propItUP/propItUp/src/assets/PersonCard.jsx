import React,{useState} from "react"

const Person = (props) =>{
    const [state, setState] = useState(props.age);
    
    return(

        <div>
            <h1>{props.name}</h1>
            <h4>Age : {state}</h4>
            <h4>Hair color : {props.hC}</h4>
            <button onClick={ (event) => setState(state + 1)}>Birthday button for {props.name}</button>
        </div>

    );

}

export default Person