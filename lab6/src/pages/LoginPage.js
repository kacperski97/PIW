import React from "react";
import { auth, provider, gitProvider } from '../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) =>{
        navigate("/greet");
        })
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, gitProvider).then((result) =>{

        navigate("/greet");
        })
    }

  return (
    <div>
        <p>
            Sign in with Google:
        </p>
        <button onClick={signInWithGoogle}>
            Sign in
        </button>
        <p>
            Sign in with Github:
        </p>
        <button onClick={signInWithGithub}>
            Sign in
        </button>
    </div>
  );
}

export default LoginPage;
