import React from 'react';
import $ from 'jquery';

import 'foundation-sites';


export class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            username: ""
        };
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
        this.foundationRecaller = this.foundationRecaller.bind(this);
    }

    componentDidMount() {
        $(document).foundation();
        const username = sessionStorage.getItem("username");
        if (username === null) {
            console.log("User is not logged in.");
        } else {
            this.setState({isUserLoggedIn: true});
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        $(document).foundation();
    }

    #functions
    logOut() {
        this.setState({isUserLoggedIn: false, username: ""});
        window.location = "http://localhost:3000/";
    }

    logIn() {
        this.setState({isUserLoggedIn: true, username: "Bazsi"});
    }

    foundationRecaller() {
        return (<script>$(document).foundation();</script>)

    }



    #render
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    {this.state.isUserLoggedIn ?
                        <DropdownMenu isUserLoggedIn={this.state.isUserLoggedIn}/> :
                        <ul className="menu">
                            <li className="menu-text">TIPSZ MIKSZ</li>
                        </ul>
                    }
                </div>
                <div className="top-bar-right">
                    <LoggedInCase isLoggedIn = {this.state.isUserLoggedIn} username={this.state.username} logIn={this.logIn} logOut={this.logOut}/>
                </div>
            </div>
        );
    }
}

function LogInButton(props) {
    return (<button type="button" className="button" onClick={props.onClick}>Login</button>)
}

function LogOutButton(props) {
    return (<button type="button" className="button" onClick={props.onClick}>Log Out</button>);
}

function GreetingsButton(props) {

    return (<button type="button" className="button">Hello {props.username}!</button>)
}

function LoggedInCase(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
            <ul className="menu">
                <li>
                    <GreetingsButton username={props.username}/>
                </li>
                <li>
                    <LogOutButton onClick={props.logOut}/>
                </li>
            </ul>
        );
    } else {
        return (<ul className="menu">
            <li>
                <input type="email" placeholder="e-mail"/>
            </li>
            <li>
                <input type="password" placeholder="password"/>
            </li>
            <li>
                <LogInButton onClick={props.logIn}/>
            </li>
        </ul>);
    }
}

function DropdownMenu(props) {
    const isUserLoggedIn = props.isUserLoggedIn;
    if (isUserLoggedIn) {
        return (
            <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">TIPSZ MIKSZ</li>
                <li>
                    <a href="#">Menu</a>
                    <ul className="sub menu vertical">
                        <li><a href="#">Bid</a></li>
                        <li><a href="#">Result</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </li>
            </ul>
        );
    } else {
        return (null);
    }
}

export default NavBar;

