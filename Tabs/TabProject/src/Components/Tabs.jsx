import React, { useState } from "react";
import styles from './Tabs.module.css'

const Tabs = (props) => {

    const content = props.arr;
    const [state , setState] = useState();
    
    return (
        <>
        <div className={styles.div}>
        {content.map( (item,index) => 
            <div key={index}>
            <label htmlFor="p" id={`label`+index} className={state == index ? styles.clicked : null}                
                onClick={() => setState(index) }>Tab {index + 1}</label>
            </div>
        )}
        </div> 
        {state == null 
            ? <p>There is no content for the moment</p> 
            : <p>{content[state]}</p>
        } 
        </>
    )
}
export default Tabs