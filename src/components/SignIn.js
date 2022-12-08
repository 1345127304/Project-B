import { useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase';
import { useState } from 'react';



function Login () {

    const location = useLocation();

    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    const registerIn = async () => {
        try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
        console.log("location", location);
        console.log(auth);
        } catch (error) {
            console.log(error.message);
        }

    };
        return (
            <form>

                <h1>Log in</h1>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => {setloginEmail(event.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => {setloginPassword(event.target.value)}} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={registerIn}>Sign in</button>

            </form>
        );
    }
export default Login;