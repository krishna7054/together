// import logo from './logo.svg';
// import './App.css';
import Nav from './Sidebar/Nav'
import Signup from './myComponents//SignUp_td/Signup'
import { useState } from 'react'
// import Navigation from './myComponents/navigation/Navgation';
// import SendButton from './myComponents/SendButton/SendButton';

import classes from './App.module.css'
// import Button from './myComponents/Buttons/delete/Delete'



function App() {

  const [isSignIn, setSignIn] = useState(localStorage.getItem('isSignIn'))
  const handleSignIn = (val) => {

    setSignIn(true);
    localStorage.setItem('isSignIn', true);
    // setSignIn(localStorage.getItem('isSignIn'));
    // setUserName(val)
  }


  return (
    <div>
      {!isSignIn && <Signup isSignIn={isSignIn} onSignIn={handleSignIn} />}

      {isSignIn && <Nav />}
      {/* <Nav /> */}

      {/* { isSignIn && <button onClick={logOutHand}>Log Out</button> }
    { console.log(`username as para form app: ${userName}`) }
    { isSignIn && <ToDo data={[userName, password, isSignIn]} /> } */}

      {/* <Nav /> */}
      {/* <Nav /> */}


      {/* <Button /> */}
      {/* <Navigation /> */}

    </div>

  );
}

export default App;
