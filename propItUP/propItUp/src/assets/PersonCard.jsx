import React from "react"

const Person = (props) =>{

    return(

        <div>
            <h1>{props.name}</h1>
            <h4>Age : {props.age}</h4>
            <h4>Hair color : {props.hC}</h4>
        </div>

    );

}

export default Person