import React from 'react';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.register = this.register.bind(this);
    }

    componentDidMount() {
    }

    #functions

    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    register() {
        console.log("Username: " + this.state.username + "\nPassword: " +  this.state.password + "\nEmail: " + this.state.email);
        fetch('http://localhost:8080/register/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.username,
                password: this.state.password
            })
        }).then(response => {return response.json()})
            .then(data => {
                if(data.status === 500) {
                    alert(data.message);
                    this.setState({email:""});
                } else {
                    this.setState({
                        username: "",
                        password: "",
                        email: ""
                    })
                    alert("Woohoo!");
                }
            });
    }

    render() {
        return (
            <div>
                <form id="register-form">
                    <div className="grid-container float-right">
                        <div className="grid-x grid-margin-y">
                            <div className="small-9 large-9 cell flex-dir-column">
                                <h3>Register</h3>
                                <label>Username
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.setUsername.bind(this)} />
                                </label>
                                <label>Password
                                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.setPassword.bind(this)}/>
                                </label>
                                <label>e-mail
                                    <input type="email" placeholder="ex@mple.com" value={this.state.email} onChange={this.setEmail.bind(this)}/>
                                </label>
                                <button type="button" className="button float-right" onClick={this.register}>Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;