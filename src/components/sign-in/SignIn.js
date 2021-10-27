import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSubmit = () =>{
       // e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        setEmail('');
        setPassword('');
    }
    const provider = new GoogleAuthProvider();

    const googleAuth = () =>{
        
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>

            <form>
                <FormInput label="email" name="email" type="email" handleChange={(e) => setEmail(e.target.value)} value={email} required />
                <FormInput label="password" name="password" type="password" handleChange={(e) => setPassword(e.target.value)} value={password} required />

                <div className="buttons">
                    <CustomButton onClick={handleSubmit}>Sign in</CustomButton>
                    <CustomButton isGoogleSignIn onClick={googleAuth}>Google</CustomButton>
                </div>
            </form>

        </div>
    )
};

export default SignIn;
