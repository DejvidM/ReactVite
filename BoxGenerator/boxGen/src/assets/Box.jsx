import React from "react";
import styles from'./Box.module.css'

const Box = (props) => {

    
    const color= {
        backgroundColor : props.color
    }
    const height = {
        height : props.sz + 'px'
    }
    const width = {
        width : props.sz + 'px'
    }

    return(

        <div className={styles.div} style={{ ...color , ...height , ...width }}  >  
        </div>

    )

}

export default Box