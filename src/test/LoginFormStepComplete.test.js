import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginFormComplete from '../components/LoginFormComplete';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import { genderOptions } from '../utils/index';
import sinon from 'sinon'
import { Field, reduxForm } from "redux-form";
import { LoginFormInput } from '../components/LoginFormInput';
import { LoginFormLabel } from '../components/LoginFormLabel';
import { LoginFormSelect } from '../components/LoginFormSelect';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';

describe("LoginFormComplete", () => {

    it("LoginFormComplete render components", () => {

        const testState = {
            user: {
                name: null,
                age: null,
                birthdate: null,
                gender: null,
                submitting: false
            }
        };


        const store = createMockStore(testState)
        const component = shallowWithStore(<LoginFormComplete />, store);
        expect(component).to.be.a('object');
    })
})
