import React, { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <div >
                <h1>Login to access dashboard.</h1>


                <form>
                    <input type="text" />
                    <input type="password" />
                </form>
            </div>
        );
    }
}