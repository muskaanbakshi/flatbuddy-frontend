import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import './Navbar.css'
import insta_logo from '../../images/logoinsta.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/love.svg'
import { Avatar } from '@material-ui/core'
import pp from '../../images/pp1.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                <Grid container>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={3}>
                        <img className='nav_logo' src={insta_logo} width='105px'></img>
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className='nav_search' placeholder='Search'/>
                    </Grid>
                    <Grid style={{display:'flex'}} item xs={3}>
                         <img className='nav_img'  src={home} width='25px'></img>
                         <img className='nav_img' src={message}  width='25px'></img>
                         <img className='nav_img' src={find} width='25px'></img>
                         <img className='nav_img' src={react} width='25px'></img>
                         <Avatar className='nav_img' style={{maxHeight:'25px',maxWidth:'25px'}} src={pp}></Avatar>
                         <button style={{height:'30px',padding:'0',marginTop:'10px',outline:'0',border:'0'}}>Logout</button>
                    </Grid>
                    <Grid item xs={1}>
                      
                    </Grid>
                </Grid>

                </div>
            </div>
        )
    }
}

export default Navbar
