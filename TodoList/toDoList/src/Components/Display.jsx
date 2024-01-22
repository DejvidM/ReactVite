import React, { useState,useEffect } from "react";
import styles from './Display.module.css'

const Display = (props) => {

    const {items, setItems, completed , setCompleted} = props;
    const [ loggedIn , setLoggedin ] = useState()
    
    const handleCheckbox = (e,item,index) =>{
        e.target.checked
        ? setCompleted( completed.map((item,i)=> i == index ?true : item ))  
        : setCompleted( completed.map((item,i)=> i == index ?false :item))
    }
    const deleteButton = () => {
        setItems(items.filter((item,index)=> completed[index] != true ));
        setCompleted(completed.filter((item,index) => completed[index] != true));
    }

    return (
        <>
            <div className={styles.div}>    
            <ul>
                {
                    items.map( (item,index) => 
                    <div key={index}>
                            <li className={ completed[index] ?styles.checked : styles.notchecked}>{item}</li> 
                            <input className={styles.inp}  type="checkbox" onChange={(e) => handleCheckbox(e,item,index)}/>
                        </div>
                    )
                }
            </ul>
            </div>
            <button className={styles.btn} onClick={deleteButton}>Delete</button>
        </>
    )
}
export default Display
