import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { completeSecondForm } from '../actions/index';
import { LoginFormLabel } from './LoginFormLabel';
import { LoginFormInput } from './LoginFormInput';
import { LoginFormSelect } from './LoginFormSelect';
import { genderOptions, checkLocalStoreForm } from '../utils/index';

class LoginFormStepTwo extends Component {

    constructor(self) {
        super(self);
        this.state = {
            name: null,
            age: null,
            submitting: false
        }
    }


    componentDidMount() {

        var storeUser = checkLocalStoreForm(1);
        if (storeUser) {
            this.setState({ name: storeUser.name, age: storeUser.age })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user && nextProps.user.name && nextProps.user.age) {
            this.setState({ name: nextProps.user.name, age: nextProps.user.age })
        }

        if (nextProps.user && nextProps.user.submitting) {
            this.setState({ submitting: true })
        }
    }

    submitForm(values) {
        this.props.completeSecondForm(values, () => {
            this.props.history.push("/logincomplete");
        });
    }

    getGenderOptions() {
        return genderOptions().map(option => {
            return <option key={option.text} value={option.value}>
                {option.text}
            </option>
        })
    }

    render() {
     
        const { handleSubmit } = this.props;
        return (
            <div>
                {
                    !this.state.name && !this.state.age && <div className="error-container w3-panel w3-card alert alert-danger">
                        <strong>Error!</strong> Please go back to step 1 and fill fields.
                                            <Link to="/loginone" className="error-link">Go back to 'Step 1'</Link>

                    </div>
                }
                <form className="form" onSubmit={handleSubmit(this.submitForm.bind(this))}>
                    <Field
                        name="title"
                        label="Step 2"
                        component={LoginFormLabel}
                    />
                    <Field
                        name="birthdate"
                        placeholder="Date of Birth"
                        type="date"
                        component={LoginFormInput}
                    />
                    <Field
                        name="gender"
                        placeholder="Gender"
                        component={LoginFormSelect}
                    >
                        {this.getGenderOptions()}
                    </Field>
                    <button type="submit" className="btn btn-primary" disabled =  {this.state.submitting ? "disabled": false} >
                        {this.state.submitting ? 'Please wait form is submitting...' : 'Submit'}
                    </button>
                    <Link to="/loginone" className="link">Go back to 'Step 1'</Link>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        completeSecondForm: (values, callback) => dispatch(completeSecondForm(values, callback))
    }
}

const validate = (values) => {

    const errors = {};
    if (!values.birthdate) {
        errors.birthdate = "You must enter date of birth!";
    }
    else {
        const date = new Date(values.birthdate);
        if (date.getFullYear() > 2017 || date.getFullYear() < 1900) {
            errors.birthdate = "Please enter a valid date of birth!";
        }
    }

    if (!values.gender) {
        errors.gender = "You must chose gender!";
    }

    return errors;
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
    };
}

export default reduxForm({
    validate,
    form: "LoginFormStepTwo"
})(connect(mapStateToProps, mapDispatchToProps)(LoginFormStepTwo));
