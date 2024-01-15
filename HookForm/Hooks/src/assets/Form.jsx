import React,{useState} from "react";



const Form = () => {
    const [name,setName] = useState();
    const [lastname , setLastName] = useState();
    const [email, setEmail] = useState();
    const [pass , setPassword] = useState();
    const [confirmpass , setConfirmedPassword] = useState();
    return (
        <>
        <form className="d">
        <label>First Name : </label>
        <input type="text" onInput={(event) => setName( event.target.value)}/>
        </form>
        <form className="d">
        <label>Last name :</label>
        <input type="text" onInput={(event) => setLastName( event.target.value)}/>
        </form>
        <form className="d">
        <label>Email : </label>
        <input type="text" onInput={(event) => setEmail(event.target.value)}/>
        </form>
        <form className="d">
        <label>Password :</label>
        <input type="password" onInput={(event) => setPassword(event.target.value)}/>
        </form>
        <form className="d">
        <label id="special">Confirm password :</label>
        <input type="password" onInput={(event) => setConfirmedPassword(event.target.value)}/>
        </form>
        <form className="pTag">
        <p>Your form data</p>
        <p>First name : {name}</p>
        <p>Last name {lastname}</p>
        <p>Email {email}</p>
        <p>Password {pass}</p>
        <p>Confirm password {confirmpass}</p>
        </form>
        </>
    )



    }

export default Form;