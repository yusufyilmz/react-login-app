import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {LoginFormLabel} from '../components/LoginFormLabel';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<LoginFormLabel label="login form label component"/>);
});
