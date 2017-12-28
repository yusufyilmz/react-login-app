import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginFormStepOne from './components/LoginFormStepOne';
import LoginFormStepTwo from './components/LoginFormStepTwo';
import LoginFormComplete from './components/LoginFormComplete';

export const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginFormStepOne}/>
      <Route path='/loginone' component={LoginFormStepOne}/>
      <Route path='/logintwo' component={LoginFormStepTwo}/>
      <Route path='/logincomplete' component={LoginFormComplete}/>
    </Switch>
  </main>
)