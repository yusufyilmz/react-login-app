import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkLocalStoreForm } from '../utils/index';

class LoginFormComplete extends Component {

    constructor(self) {
        super(self);
        this.state = {
            name: null,
            age: null,
            birthdate: null,
            gender: null
        }
    }

    componentDidMount() {

        var storeUser = checkLocalStoreForm(1);
        if (storeUser) {
            this.setState({ name: storeUser.name, age: storeUser.age })
        }

        storeUser = checkLocalStoreForm(2);
        if (storeUser) {
            this.setState({ birthdate: storeUser.birthdate, gender: storeUser.gender })
        }

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.user && nextProps.user.name && nextProps.user.age) {
            this.setState({ name: nextProps.user.name, age: nextProps.user.age })
        }

        if (nextProps.user && nextProps.user.birthdate && nextProps.user.gender) {
            this.setState({ birthdate: nextProps.user.birthdate, gender: nextProps.user.gender })
        }

    }


    renderUser() {
        return <div style={{paddingTop:20}}>
            <h1 style={{paddingLeft:600}} >User</h1>
            <div className="form-complete">
                <table >
                    <tbody> 
                    <tr>
                        <td>
                            <div className="container w3-panel w3-card">
                                <h4><b>Username</b></h4>
                                <p>{this.state.name}</p>
                            </div>
                        </td>
                        <td>
                            <div className="container w3-panel w3-card">
                                <h4><b>Age</b></h4>
                                <p>{this.state.age}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="container w3-panel w3-card">
                                <h4><b>Date Of Birth:</b></h4>
                                <p>{this.state.birthdate}</p>
                            </div>
                        </td>
                        <td>
                            <div className="container w3-panel w3-card">
                                <h4><b>Gender:</b></h4>
                                <p>{this.state.gender}</p>
                            </div>
                        </td>
                    </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    }
    renderErrors() {
        return (
            <div>
                {
                    !this.state.name && !this.state.age && <div className="error-container-complete w3-panel w3-card alert alert-danger">
                        <strong>Error!</strong> Please go back to step 1 and fill fields.
                        <Link to="/loginone" className="error-link">'Step 1'</Link>
                    </div>
                }
                {
                    !this.state.birthdate && !this.state.gender && <div className="error-container-complete w3-panel w3-card alert alert-danger">
                        <strong>Error!</strong> Please go back to step 2 and fill fields.
                        <Link to="/logintwo" className="error-link">'Step 2'</Link>
                    </div>
                }
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderErrors()}
                {this.renderUser()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { user: state.user };
}


export default connect(mapStateToProps, null)(LoginFormComplete)

