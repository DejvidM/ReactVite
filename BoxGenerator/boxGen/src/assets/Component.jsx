import React, { useState } from "react";
import styles from './Component.module.css'
import Box from "./Box";

const Component = () => {

    const [state , setState] = useState("");
    const [boxes , setBoxes] = useState([]);
    const [size , setSize] = useState('');

    const nothing = (e) => {
        e.preventDefault();
        setState('');
        setSize('');
    }
    
    return (
        <>
        <form onSubmit={nothing}>   
            <label htmlFor="color">Color</label>
            <input type="text" id="color" value={state} onChange={(e) => setState(e.target.value)}/>
            <label htmlFor="number">Size</label>
            <input type="text" id="size" value={size} onChange={(e) => setSize(e.target.value)}/>
            <input type="submit" value="Add" onClick={() => setBoxes([...boxes , <Box color={state} sz={size}></Box> ]) }/>
        </form>  
        {
            <div className={styles.div}>
            {boxes.map( (box,index) => 
                <div key={index}> {box} </div>
            )}
            </div>
        }
        </>
    )
}

export default Component