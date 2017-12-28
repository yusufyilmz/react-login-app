import React from 'react';
import ReactDOM from 'react-dom';
import { LoginFormSelect } from '../components/LoginFormSelect';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import {genderOptions}from '../utils/index';


describe('<LoginFormSelect />', () => {
  it('should render <LoginFormSelect /> component', () => {

    const children = genderOptions().map(option => {
            return <option key={option.text} value={option.value}>
                {option.text}
            </option>
        })

    const input = { name: 'gender', value: '' }
    const label = 'Gender'
    const placeholder = 'Gender'
    const meta = { touched: true, error: 'You must enter choose gender' }
    const element = LoginFormSelect({ children, input, placeholder, label, meta })
    let wrapper = shallow(element)
    const firstNameHelpBlock = wrapper.find('.alert .alert-warning')
    expect(wrapper).exist
    expect(firstNameHelpBlock).exist
    expect(firstNameHelpBlock.children).exist
    expect(firstNameHelpBlock.text()).equal('Warning! You must enter choose gender')
  });
});
