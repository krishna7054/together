
import classes from './Signup.module.css'
import { Children, useState } from 'react'
const api_base = 'http://localhost:3001';

const SignUp = ({ isSignIn, onSignIn }) => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSignup, setIsSignup] = useState(false);

    const handleChange = () => {
        setIsSignup(!isSignup);
    };

    const signupHandler = (e) => {
        e.preventDefault();
        makeUser();
        console.log(uname, email, password);

    }
    const loginHandler = (e) => {
        e.preventDefault();
        login();
        console.log(uname, password);
    }

    const dataArray = [uname, email, password];
    const loginData = [uname, password];
    const makeUser = async () => {
        const data = await fetch(api_base + "/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: dataArray[0],
                email: dataArray[1],
                password: dataArray[2]
            })
        }).then(response => {
            if (response.ok) {
                setIsSignup(true);

                console.log('User registered successfully');
            } else {
                console.log('Error registering user');
            }
        }).catch(error => console.error(error));
    }
    const login = async (e) => {

        e.preventDefault();
        const response = await fetch(api_base + "/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: loginData[0],
                password: loginData[1]
            })
        })


        if (response.status === 200) {
            // isSignIn = true;
            console.log("login running");
            console.log(`1 setting userName to local storage on succussful login : ${loginData[0]}`)
            localStorage.setItem('userName', loginData[0]);
            localStorage.setItem('isSignIn', true);
            // localStorage.setItem('password', loginData[1]);
            console.log(`2 getting userNmane from login: ${localStorage.getItem('userName')}`);
            console.log(`3. calling onSignIn from login with logindata[0]: ${loginData[0]}`);
            onSignIn(loginData[0]);
            console.log(isSignIn);
            console.log('Login successful');
            // do something after successful login, e.g. redirect to another page
        } else {
            const data = await response.json();
            console.log(data.message);
        }

    }


    return (
        <div>
            <div className={classes.main}>
                <input type="checkbox" id="chk" />

                <div className={classes.signup}>
                    <form onSubmit={signupHandler}>
                        <label htmlFor="chk" aria-hidden="true"  >Sign up</label>
                        {/* <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} /> */}
                        <input type="text" name="txt" placeholder="User name" required="true" value={uname} onChange={(e) => { setUname(e.target.value) }} />

                        <input type="email" name="email" placeholder="Email" required="true" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" name="pswd" placeholder="Password" required="true" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className={classes.button} type='submit'>Sign up</button>
                    </form>
                </div>

                {<div className={`${classes.login} ${isSignup ? classes.signupactive : ''}`}>
                    <form onSubmit={login}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="text" name="txt" placeholder="User name" required="true" value={uname} onChange={(e) => { setUname(e.target.value) }} />
                        <input type="password" name="pswd" placeholder="Password" required="true" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className={classes.button}>Login</button>
                    </form>
                </div>}
            </div>

        </div>
    )
}
export default SignUp