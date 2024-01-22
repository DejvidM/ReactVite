import React, { useState } from "react";
import styles from './AddInput.module.css'

const AddInput = (props) => {

    const {items,setItems,setCompleted,completed} = props;
    const [ word , setWord] = useState('');

    const save = () => {
        setItems([...items, word ]);
        setWord('');
        setCompleted([...completed , false]);
    }

    return (
        <>  
        <div className={styles.div}>
            <label className={styles.label}>To do list : </label>
            <input className={styles.inp} type="text" value={word} onChange={(e) =>{setWord(e.target.value) }}/>
            <button className={styles.btn}  onClick={() =>{ save(); }} >Add</button>
        </div>
        </>
    )
}

export default AddInput