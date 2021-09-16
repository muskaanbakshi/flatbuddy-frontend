import React, { Component } from 'react'
import './MainContent.css'
import { Grid } from '@material-ui/core'
import MainPage from '../MainPage/MainPage'
import StoryBar from '../StoryBar/StoryBar'
import Infosection from '../InfoSection/Infosection'
import Suggestions from '../Suggestions/Suggestions'
class Maincontent extends Component {
    render() {
        return (
            <div>
               <Grid container>
                   <Grid item xs={2}></Grid>
                   <Grid item xs={6}>
                       <div>
                           <StoryBar/>
                           <MainPage/>  
                       </div>
                   </Grid>
                   <Grid item xs={2}>
                   <Infosection/>
                   <Suggestions/>
                   </Grid>
                   <Grid item xs={2}></Grid>
               </Grid>
            </div>
        )
    }
}

export default Maincontent
