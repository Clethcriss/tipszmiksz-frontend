import React from 'react';


export class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            username: "";
        };
        this.logOut = this.logOut.bind(this);
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
        this.setState({isUserLoggedIn: false});
        window.location = "http://localhost:3000/";
    }

    #render

    render() {
        return "";
    }
}

export default NavBar;