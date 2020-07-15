import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

export default class NavigationComponent extends Component {
    constructor(){
        super()
    }

    render() {
        return <div className="nav-wrapper">
            <div className= "left-side">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about-me">About</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
                <NavLink exact to="/blog">Blog</NavLink>
            </div>
            <div className = "right-side">
                
            </div>
            </div>
    }
}