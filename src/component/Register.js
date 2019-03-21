import React from 'react';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <form>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="medium-6 cell">
                            <label>Input Label
                                <input type="text" placeholder=".medium-6.cell"/>
                            </label>
                        </div>
                        <div className="medium-6 cell">
                            <label>Input Label
                                <input type="text" placeholder=".medium-6.cell"/>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Register;