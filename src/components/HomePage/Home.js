import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Maincontent from '../MainContent/Maincontent'
class Home extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
                <Navbar/>
                <Maincontent/>
            </div>
        )
    }
}

export default Home
