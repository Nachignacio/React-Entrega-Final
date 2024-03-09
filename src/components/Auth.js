import { useEffect, useState } from "react";
import {auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";

function Auth(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signError, setSignError] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    function handleSignUp(){
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {setCurrentUser(auth?.currentUser)})
            .catch(error => {
                switch (error.code) {
                    case 'auth/email-already-in-use': {
                    console.log(`Email address ${email} already in use.`);
                    signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        setCurrentUser(userCredential.user);
                        console.log("user credential: ", userCredential.user);
                        })
                    }
                    break;
                    case 'auth/invalid-email':
                    console.log(`Email address ${email} is invalid.`);
                    break;
                    case 'auth/operation-not-allowed':
                    console.log(`Error during sign up.`);
                    break;
                    case 'auth/weak-password':
                    console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
                    break;
                    default:
                    console.log(error.message);
                    break;
                    }
                setCurrentUser(auth?.currentUser);
            })
    }


    useEffect(
        () => {
            console.log(auth?.currentUser?.email)
    },[auth])

    async function logOut(){
        await signOut(auth);
        setCurrentUser({});
        setSignError(false);
    }

    function signInWithGoogle(){
        signInWithPopup(auth, googleProvider);
        setCurrentUser(auth?.currentUser);
    }


    return(
        <div>
            {auth?.currentUser ? 
                (
                    <div>
                        <p>Current user: {auth?.currentUser.email}
                        </p>
                        <button onClick={logOut}>
                            SignOut
                        </button>
                    </div>
                ) : (
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" placeholder="name@email.com" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password: </label>
                        <input type="text" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={handleSignUp}>SignUp</button>
                        <button onClick={signInWithGoogle}>Log In with Google</button>
                        {signError ? (
                            <div>
                                <p>Error loging in</p>
                            </div>
                            ) : (
                            <div>
                            </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Auth;
