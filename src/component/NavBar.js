import React from 'react';


export class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            username: ""
        };
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    componentDidMount() {
        const username = sessionStorage.getItem("username");
        if (username === null) {
            console.log("User is not logged in.");
        } else {
            this.setState({isUserLoggedIn: true});
        }
    }

    #functions
    logOut() {
        this.setState({isUserLoggedIn: false, username: ""});
        window.location = "http://localhost:3000/";
    }

    logIn() {
        this.setState({isUserLoggedIn: true, username: "Bazsi"});
    }



    #render
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">TIPSZ MIKSZ</li>
                        <li>
                            <a href="#">Menu</a>
                            <ul className="menu vertical">
                                <li><a href="#">Bid</a></li>
                                <li><a href="#">Result</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </li>
                    </ul>
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

export default NavBar;

