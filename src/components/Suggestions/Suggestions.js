import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import image from '../../images/pp1.png'
import './Suggestions.css'
class Suggestions extends Component {
    render() {
        return (
            <div  style={{marginLeft:'25px'}}>
                <div className='suggestion_cont'>
                    <div className='suggestion_head'>
                        <div>Suggestions for you</div>
                    </div>
                    <div className='suggestion_body'>
                    <div className='suggestion_friends'>
                    <Avatar src={image} className='suggestion_img'/>
                    <div className='suggestion_username'>Friend 1</div>
                    </div>
                    <div className='suggestion_friends'>
                    <Avatar src={image} className='suggestion_img'/>
                    <div className='suggestion_username'>Friend 1</div>
                    </div>
                    <div className='suggestion_friends'>
                    <Avatar src={image} className='suggestion_img'/>
                    <div className='suggestion_username'>Friend 1</div>
                    </div>
                    <div className='suggestion_friends'>
                    <Avatar src={image} className='suggestion_img'/>
                    <div className='suggestion_username'>Friend 1</div>
                    </div>
                    <div className='suggestion_friends'>
                    <Avatar src={image} className='suggestion_img'/>
                    <div className='suggestion_username'>Friend 1</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Suggestions
