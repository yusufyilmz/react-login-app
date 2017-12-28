import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginFormStepTwo from '../components/LoginFormStepTwo';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import { genderOptions } from '../utils/index';
import sinon from 'sinon'
import { Field, reduxForm } from "redux-form";
import { LoginFormInput } from '../components/LoginFormInput';
import { LoginFormLabel } from '../components/LoginFormLabel';
import { LoginFormSelect } from '../components/LoginFormSelect';


describe("LoginFormStepTwo", () => {

    it("LoginFormStepTwo render components", () => {
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


        let wrapper = shallow(<LoginFormStepTwo {...props} />)
        const form = wrapper.find('form').first();
        expect(form).exist
        expect(form).to.have.contain(LoginFormLabel)
        expect(form).to.have.contain(LoginFormInput)
        expect(form).to.have.contain(LoginFormSelect)

    })
})
