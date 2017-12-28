import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginFormStepOne from '../components/LoginFormStepOne';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import { genderOptions } from '../utils/index';
import { spy } from 'sinon';
import { Field, reduxForm } from "redux-form";
import { LoginFormInput } from '../components/LoginFormInput';
import { LoginFormLabel } from '../components/LoginFormLabel';


describe("LoginFormStepOne", () => {

    it("LoginFormStepOne render components", () => {
        let submitting, touched, error, handleSubmit, completeFirstForm

        const props = {
            submitting: submitting,
            fields: {
                username: {
                    value: '',
                    touched: touched,
                    error: error
                }
            },
            handleSubmit,
            completeFirstForm: completeFirstForm
        }


        let wrapper = shallow(<LoginFormStepOne {...props} />)
        const form = wrapper.find('form').first();
        expect(form).exist
        expect(form).to.have.contain(LoginFormLabel)
        expect(form).to.have.contain(LoginFormInput)
    })
})
