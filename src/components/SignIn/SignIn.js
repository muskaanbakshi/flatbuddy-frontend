import React, { Component } from 'react'
import insta_logo from '../../images/logoinsta.png'
import { storage,auth } from '../firebase'
class SignIn extends Component {

    constructor(){
        super()
        this.state={
            emailId:'',
            password:''

        }
    }

    login=()=>{
        // localStorage.setItem("users","admin"),
        // window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    localStorage.setItem("user",user);
    window.location.reload()
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }
    render() {
        return (
            <div>
            
          
           <div className='loginpage_signin'>
            <input className='loginpage_text' onChange={(e)=>this.setState({emailId:e.target.value})} placeholder='Phone number,username or email' type='text'>

            </input>
            <input className='loginpage_text' onChange={(e)=>this.setState({password:e.target.value})} placeholder='password' type='password'>

            </input>
            <button style={{cursor:'pointer'}} onClick={this.login} className='login_button'>Log in </button>
            </div>
           
            </div>
           
        
        )
    }
}

export default SignIn
