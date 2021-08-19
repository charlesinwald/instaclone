import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

var firebaseConfig = {
    apiKey: "AIzaSyBqrlNZ2CQ7kqZ7vJuNAQ6CXl14wM_Ibng",
    authDomain: "instaclone-893ad.firebaseapp.com",
    projectId: "instaclone-893ad",
    storageBucket: "instaclone-893ad.appspot.com",
    messagingSenderId: "382953119316",
    appId: "1:382953119316:web:96f40ede76798e788b97c1",
    measurementId: "G-HH5WFREJRN"
};
firebase.initializeApp(firebaseConfig);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

const Login = () => {
    return <div>
        <h1>Login</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
}
export default Login;