import React, { useState } from 'react';
import './SignUp.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { createUserProfileDocument } from '../../index';

const SignUp = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(e) =>{
         e.preventDefault();

         if(password !== confirmPassword){
             alert("Passwords do not match!");
             return;
         }
         try {
            createUserWithEmailAndPassword(auth,email,password)
                .then( async (credential) =>{
                    console.log(credential);
                    const user = credential.user;
                    console.log(displayName);
                    user.displayName = displayName;
                    await createUserProfileDocument(user);
                })
                .catch(e => {
                    console.log(e);
                });
           
  

         } catch(e){
             alert(e);
         }

       
       
         setEmail('');
         setPassword('');
         setDisplayName('');
         setConfirmPassword('');
     };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sing up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput label="Display Name" name="displayName" type="text" handleChange={(e) => setDisplayName(e.target.value)} value={displayName} required />
                <FormInput label="Email" name="email" type="email" handleChange={(e) => setEmail(e.target.value)} value={email} required />
                <FormInput label="Password" name="password" type="password" handleChange={(e) => setPassword(e.target.value)} value={password} required />
                <FormInput label="Confirm Password" name="confirmPassword" type="password" handleChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />

                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
