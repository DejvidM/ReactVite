import React,{useState} from "react";

const Form = () => {
    const [name,setName] = useState();
    const [lastname , setLastName] = useState();
    const [email, setEmail] = useState();
    const [pass , setPassword] = useState();
    const [confirmpass , setConfirmedPassword] = useState();

    const nothing = (e) => {
        e.preventDefault();


    }
    
    return (
        <>
        <form onSubmit={nothing}>
            <div className="d">
                <label>First Name : </label>
                <input type="text"/>
            </div>
            <div className="d">
                <label>Last name :</label>
                <input type="text" />
            </div>
            <div className="d">
                <label>Email : </label>
                <input type="text" />
            </div>
            <div className="d">
                <label>Password :</label>
                <input type="password" />
            </div>
            <div className="d">
                <label id="special">Confirm password :</label>
                <input type="password" onInput={(event) => setConfirmedPassword(event.target.value)}/>
            </div>
            <div className="pTag">
                <p>Your form data</p>
                <p>First name : {name}</p>
                <p>Last name {lastname}</p>
                <p>Email {email}</p>
                <p>Password {pass}</p>
                <p>Confirm password {confirmpass}</p>
            </div>
        </form>
        </>
    )



    }
export default Form;
