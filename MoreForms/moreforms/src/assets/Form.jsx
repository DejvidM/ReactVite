import React,{useState} from "react";

const Form = () => {
    const [name,setName] = useState();
    const [lastname , setLastName] = useState();
    const [email, setEmail] = useState();
    const [pass , setPassword] = useState();
    const [confirmpass , setConfirmedPassword] = useState();
    const [display , setDisplay] = useState("");
    const [displayLastname , setDisplayLastname] = useState("");
    const [displayEmail , setDisplayEmail] = useState("");
    const [displayPass , setDisplayPass] = useState("");
    const [displayConfPass , setDisplayConfPass] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        e.target.value.length < 2
        ? setDisplay("First name must have at least 2 characters!")
        :setDisplay('')
        
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        e.target.value.length < 2
        ? setDisplayLastname("Last name must have at least 2 characters!")
        :setDisplayLastname('')   
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5
        ? setDisplayEmail("Email must have at least 5 characters!")
        :setDisplayEmail('')
        
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8
        ? setDisplayPass("password must have at least 8 characters!")
        :setDisplayPass('')
        
    }
    const handleconfirmPass = (e) => {
        setConfirmedPassword(e.target.value);
        e.target.value === pass
        ? setDisplayConfPass('')
        : setDisplayConfPass("The passwords must match")

    }

    const nothing = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={nothing}>
            <div className="d">
                <label>First Name : </label>
                <input type="text" onChange={handleName}/>
            </div>
            {
                display
                ? <p>{display}</p> : ''
            }
            <div className="d">
                <label>Last name :</label>
                <input type="text" onChange={handleLastName}/>
            </div>
            {
                displayLastname
                ? <p>{displayLastname}</p> : ''
            }
            <div className="d">
                <label>Email : </label>
                <input type="text" onChange={handleEmail}/>
            </div>
            {
                displayEmail
                ? <p>{displayEmail}</p> : ''
            }
            <div className="d">
                <label>Password :</label>
                <input type="password" onChange={handlePass}/>
            </div>
            {
                displayPass
                ? <p>{displayPass}</p> : ''
            }
            <div className="d">
                <label id="special">Confirm password :</label>
                <input type="password" onChange={handleconfirmPass}/>
            </div>
            {
                displayConfPass
                ? <p>{displayConfPass}</p> : ''
            }
            <div className="pTag">
                <p>Your form data </p>
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
