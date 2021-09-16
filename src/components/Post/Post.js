import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import './Post.css'
import postimage from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'
class Post extends Component {

    constructor(props){
        super(props)
        this.state={
            commentList:[]
        }
    }

    componentDidMount(){
        this.getComments()
    }

    getComments = () => {
        var thisC=this
        fetch(`http://localhost:8080/comments/${thisC.props.id}`)
        .then(response => response.json())
        .then(data => {
            thisC.setState({commentList:data})
    
        }).catch((error)=>{
    
        })
       
    }

    submitComments = (event) => {
        if(event.key=='Enter'){
            let comment = event.target.value
            if(comment!=null || comment!=undefined){
                let payload = {
                    "commentId":Math.random().toString(36).slice(-8),
                    "userId":JSON.parse(localStorage.getItem("user")).uid,
                    "comment":comment,
                   "postId":this.props.id,
                   "timeStamp":new Date().getTime()
            
                }
            
                const requestOptions = {
                    method:"POST",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(payload)
                }
                fetch("http://localhost:8080/comments",requestOptions)
                .then(response => response.json())
                .then(data => {
                   this.getComments();
                   event.target.value=''
            
                }).catch((error)=>{
            
                })
            }
        }
    }
    render() {
        return (
            <div style={{margin:'25px'}} className='post_container'>

               <div  className='post_header'>
                <Avatar className='post_avt' src=""></Avatar>
                <div className='post_user' >{this.props.userName}</div>
               
               </div>
               <div>
                    <img src={this.props.postImage} width='615px'></img>
                </div>

                <div>
                    <div style={{marginLeft:'10px'}}>
                        <img src={love} className='post-react-image'></img>
                        <img src={comment} className='post-react-image'></img>
                        <img src={share} className='post-react-image'></img>
                    </div>
                    <div style={{fontWeight:'bold',marginLeft:'15px'}}>
                        {this.props.likes} likes
                    </div>
                </div>

                <div>
                {
                    this.state.commentList.map((item)=>{
                        return(
                            <div className='post_comment'>{item.username}: {item.comment}</div>
                        )
                    })
                }
                    <div>
                  
                    <input type='text' onKeyPress={this.submitComments} className='commentBox' placeholder='Add a comment...'></input>
                    
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Post
