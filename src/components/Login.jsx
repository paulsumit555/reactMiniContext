
import React, {useState,useContext} from "react";

import UserContext from "../UserContext/UserContext";



export default function Login(){

    const [userName,setUserName] = useState('')
    const [pwd,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const {setUserPassword} = useContext(UserContext)

    const submit = (e)=>{
        e.preventDefault()
        setUser({userName})
        setUserPassword({pwd})
    }
    return (
        <div>
            <h2>Login : </h2>
            <input type='text' placeholder="userName" onChange={(e)=>setUserName(e.target.value)} value={userName}></input>
            <input type='text' placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={pwd}></input>
            <button onClick={submit}> Submit</button>
        </div>
    )
}