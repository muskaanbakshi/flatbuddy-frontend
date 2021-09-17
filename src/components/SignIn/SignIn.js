import React, { Component } from 'react'
import { storage,auth } from '../firebase'
class SignIn extends Component {

    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
            inValid: false
        }
    }

    login=()=>{
        // localStorage.setItem("users","admin"),
        // window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("user",user);
    window.location.reload()
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    this.setState({inValid: true});
  });
    }
    render() {
        return (
            <div>
            
          
           <div className='loginpage_signin'>
            <input className='loginpage_text' onChange={(e)=>this.setState({emailId:e.target.value})} placeholder='Email address' type='email'>

            </input>
            <input className='loginpage_text' onChange={(e)=>this.setState({password:e.target.value})} placeholder='Enter password' type='password'>

            </input>
            <button style={{cursor:'pointer'}} onClick={this.login} className='login_button'>Log in </button>
            </div>

            {this.inValid && 
                <div> 
                    Your email or password is incorrect
                </div>
            }
           
            </div>
           
        
        )
    }
}

export default SignIn
