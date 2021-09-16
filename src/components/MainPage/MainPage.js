import React, { Component } from 'react'
import Post from '../Post/Post'
import uploadImg from '../../images/upload.png'
import { storage } from '../firebase'
import './MainPage.css'
class MainPage extends Component {

    constructor(){
        super()
        this.state={
            postArray:[],
            progressBar:'0'
        }
    }

    componentDidMount(){
        this.getPosts()
    }


    getPosts = () => {
        const thisContext=this
        fetch("http://localhost:8080/post")
        .then(response => response.json())
        .then(data => {
            thisContext.setState({postArray:data})
            
        }).catch((error)=>{
    
        })
   
    }

    upload=(event)=>{
        let image=event.target.files[0]
        if(image==null || image==undefined)
        return;
        var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            this.setState({progressBar:progress})
          }
        , 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              
             
            let payload = {
                "userId":JSON.parse(localStorage.getItem("user")).uid,
                "postId":Math.random().toString(36).slice(-8),
                "postPath":downloadURL,
                "timeStamp":new Date().getTime(),
                "likeCount":0
        

            }

            
          
            const requestOptions = {
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(payload)
            }
            fetch("http://localhost:8080/post",requestOptions)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.getPosts();
              
                
            }).catch((error)=>{
        
            })
          });
        })
    }
    render() {
        return (
            <div>
            <div className='fileupload' style={{textAlign:'center'}}>
            <label style={{textAlign:'center'}} for='file-upload'>
            <img style={{cursor:'pointer'}} className='upload' src={uploadImg}></img>
            </label>
            <div>
               <input onChange={this.upload} id='file-upload' type='file'/>
               </div>
            </div>
            <div className="uploading">
            {this.state.progressBar} %
            </div>

            {this.state.postArray.map((post)=>{
                return(
                    <Post id={post.postId} userName={post.username} postImage={post.postPath} likes={post.likeCount}/>
                )
            })}
              
            </div>
        )
    }
}

export default MainPage
