import { useEffect, useState } from "react";
import {auth} from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

function Auth(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signError, setSignError] = useState(false);

    async function signUp(){
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch{
            setSignError(true);
            console.log("sign error: ", signError)
        }
    }

    useEffect(
        () => {
            console.log(auth?.currentUser?.email)
    },[auth])

    async function logOut(){
        await signOut(auth);
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
                        <button onClick={signUp}>SignUp</button>
                        <button>Log In with Google</button>
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
