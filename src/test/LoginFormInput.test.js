import React from 'react';
import ReactDOM from 'react-dom';
import { LoginFormLabel } from '../components/LoginFormLabel';
import { LoginFormInput } from '../components/LoginFormInput';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'

describe('<LoginFormInput />', () => {
    it('should render <LoginFormInput /> component', () => {
      const input = { name: 'user Name', value: '' }
      const label = 'user name'
      const type = 'text'
      const placeholder = 'UserName'
      const meta = { touched: true, error: 'You must enter user name' }
      const element = LoginFormInput({ input, placeholder, label, meta })
      let wrapper = shallow(element)
      expect(wrapper).exist
      const firstNameHelpBlock = wrapper.find('.alert .alert-warning')
      expect(firstNameHelpBlock).exist
      expect(firstNameHelpBlock.text()).equal('Warning! You must enter user name')
    });
  });
