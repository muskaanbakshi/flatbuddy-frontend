import React, { Component } from 'react'
import './StoryBar.css'
import storyimg from '../../images/pp1.png'
import upload from '../../images/statusadd.png'
import { Avatar } from '@material-ui/core'
class StoryBar extends Component {

    constructor(props){
        super(props)
        this.state={
            statuslist:[]
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        let data=[
            {
                "username":"Vaibhav",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Messi",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Ronaldo",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Neymar",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Dhoni",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Kohli",
                "imageUrl":'../../images/pp1.png'
            },
            {
                "username":"Ab de villers",
                "imageUrl":'../../images/pp1.png'
            },  {
                "username":"Sachin",
                "imageUrl":'../../images/pp1.png'
            },  {
                "username":"Zaheer",
                "imageUrl":'../../images/pp1.png'
            },
            

        ]
        this.setState({statuslist:data})
    }
    render() {
        return (
            <div>
             <div className='story_cont'>
             <img src={upload} className='status_upload' width='55px' height='55px'></img>
            {this.state.statuslist.map((status)=>{
                return(
                   
                <div className='status'>
                <Avatar className='story_img' src={status.imageUrl}></Avatar>
                <div className='status_text'>{status.username}</div>
                </div>
               
               
                )
            })}
            </div>
                
            </div>
        )
    }
}

export default StoryBar
