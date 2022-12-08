
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'
import { useState } from 'react';



function SignUp() {


    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };


        return (
            <form>
                <h1> Sign Up</h1>

                <div className = "form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                </div>

                <div className = "form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>Register</button>

            </form>

        )
    };
    export default SignUp;