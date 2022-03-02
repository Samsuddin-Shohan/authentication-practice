
import React from 'react';
import initializeFirebase from '../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';


initializeFirebase();
const auth = getAuth();
const githubProvider = new GithubAuthProvider();


const Authentication = () => {
    const [user, setUser] = useState({});
    const handleFacebookLogin = ()=>{
        console.log('facebook clicked');
    }
    const handleTwitterLogin = () =>{
        console.log('twitter clicked');
    }
    const handleGithubLogin = () =>{
        // console.log('github clicked');
        signInWithPopup(auth, githubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const people = result.user;
    console.log(user);
    const {email,displayName,photoURL} = people;
    setUser({
        name:displayName,
        email,
        photo:photoURL
    });
    // ...
  })

    }
    return (
        <div>
            <h1>This is Authentication page</h1>
            <button onClick={handleFacebookLogin} className='btn btn-primary m-3 '>Sign in With Facebook</button>
            <button onClick={handleGithubLogin} className='btn btn-primary m-3  '>Sign in With Github</button>
            <button onClick={handleTwitterLogin} className='btn btn-primary  m-3 '>Sign in With Twitter</button>
            {
                user.name && <div className='m-3'>
                <h2>User: {user.name}</h2>
                <h4>Email: {user.email}</h4>
                <img src={user.photo} alt="" />
            </div>
            }
        </div>
    );
};

export default Authentication;