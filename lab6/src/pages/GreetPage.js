import React from "react";
import{ signOut } from 'firebase/auth'
import { auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom'


function GreetPage() {    
    let navigate = useNavigate();
    const user = auth.currentUser;

    const name = user.displayName;

    const signUserOut = () => {
        signOut(auth).then(() =>{
            navigate("/");
        })
    }

  return (
    <div>
        <p>
            Hello, {name}!
        </p>
        <button onClick={signUserOut}>
            Log out
        </button>
    </div>
  );
}

export default GreetPage;
