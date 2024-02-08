import React, { useContext } from "react";
import UserContext from "../UserContext/UserContext";


function Profile(){

    const {user} = useContext(UserContext)
    const {userPassword} = useContext(UserContext)

    
       
    if(!user || user.userName=='') return <div>Please login</div>

    return <div>Welcome {user.userName} and password is {userPassword.pwd}</div>
          
       

   
}

export default Profile