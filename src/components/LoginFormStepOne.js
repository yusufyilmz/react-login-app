import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { completeFirstForm } from '../actions/index';
import { LoginFormLabel } from './LoginFormLabel';
import { LoginFormInput } from './LoginFormInput';


class LoginFormStepOne extends Component {

    componentWillMount() {
        localStorage.clear();
    }

    submitForm(values) {
        this.props.completeFirstForm(values, () => {
            this.props.history.push("/logintwo");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.submitForm.bind(this))}>
                <Field
                    name="title"
                    label="Step 1"
                    component={LoginFormLabel}
                />
                <Field
                    name="username"
                    type="text"
                    placeholder="UserName"
                    component={LoginFormInput}
                />
                <Field
                    name="age"
                    type="number"
                    placeholder="Age"
                    component={LoginFormInput}
                />

                <button type="submit" className="btn btn-primary">
                    Next
                </button>
            </form>
        );
    }
}


const validate = (values) => {

    const errors = {};
    if (!values.username) {
        errors.username = "You must enter user name!";
    }
    else if (!values.username.search(/[^a-zA-Z]+/)) {
        errors.username = "Enter a valid username!";
    }
    if (!values.age) {
        errors.age = "You must enter age!";
    }
    else if (values.age <= 0) {
        errors.age = "Enter a valid age!";
    }

    return errors;
}

const mapDispatchToProps = (dispatch) => {

    return {
        completeFirstForm: (values, callback) => dispatch(completeFirstForm(values, callback))
    }
}

export default reduxForm({
    validate,
    form: "LoginFormStepOne"
})(connect(null, mapDispatchToProps)(LoginFormStepOne));
