import React, { Component } from 'react'
import { auth,storage } from '../firebase';
class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            emailId:"",
            name:null,
            username:null,
            password:"",
        }
    }

    handleChange = (event) => {
       
        var value = event.target.value;
        
        this.setState({
            
            [event.target.name]:value,
        })
        console.log(this.state)
    }

    newSignUp = () => {
        
        auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in 
  console.log("asdasdsadsad")
    var user = userCredential.user;

        
    let payload = {
        "userId":user.uid,
        "username":this.state.username,
        "name":this.state.name,
        "profileImg":""

    }

    const requestOptions = {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
    }
    fetch("http://localhost:8080/users",requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(user)
        localStorage.setItem("user",JSON.stringify(user));
    window.location.reload()

    }).catch((error)=>{

    })
    // ...
  })
  .catch((error) => {
     
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
    render() {
        return (
            <div>
                 <div className='loginpage_signin'>
            <input  name= 'emailId' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Mobile number or email' type='text'>

            </input>
            <input  name='name' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Full Name' type='text'>

            </input>
            <input name='username' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Username' type="text">

</input>
  <input input='password' className='loginpage_text' onChange={(e)=>this.setState({password:e.target.value})} placeholder='Password' type='password'>

</input>
            <button onClick={this.newSignUp} style={{cursor:'pointer'}} className='login_button'>Sign up </button>
            </div>
          
            </div>
            
        )
    }
}

export default SignUp
