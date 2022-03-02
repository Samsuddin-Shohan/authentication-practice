import { Button } from 'bootstrap';
import React from 'react';
import initializeFirebase from '../../Firebase/firebase.init';

initializeFirebase();

const Authentication = () => {
    const handleFacebookLogin = ()=>{
        console.log('facebook clicked');
    }
    const handleTwitterLogin = () =>{
        console.log('twitter clicked');
    }
    const handleGithubLogin = () =>{
        console.log('github clicked');
    }
    return (
        <div>
            <h1>This is Authentication page</h1>
            <button onClick={handleFacebookLogin} className='btn btn-primary m-3 '>Sign in With Facebook</button>
            <button onClick={handleGithubLogin} className='btn btn-primary m-3  '>Sign in With Github</button>
            <button onClick={handleTwitterLogin} className='btn btn-primary  m-3 '>Sign in With Twitter</button>
        </div>
    );
};

export default Authentication;