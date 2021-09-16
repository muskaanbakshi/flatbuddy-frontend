import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import image from '../../images/pp1.png'
import './Infosection.css'

class Infosection extends Component {

    constructor(props){

        super(props)
        
    }
    render() {
        return (
            <div style={{marginLeft:'25px'}}>
            <div className='info_cont'>
                <Avatar src={image} className='info_img'></Avatar>
                <div className='info_content'>
                    <div className='info_user'>USername</div>
                    <div className='info_desc'>description</div>
                </div>
            </div>
                
            </div>
        )
    }
}

export default Infosection
