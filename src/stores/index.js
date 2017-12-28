import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers/index';

let middleware = [ReduxThunk, ReduxPromise]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe(() => {

  var userData = JSON.parse(localStorage.getItem('user'))
  if (userData === null) {
    userData = {}
  }
  let userStoreData = store.getState().user;
  if (userStoreData.name) {
    userData.name = userStoreData.name;
  }
  if (userStoreData.age) {
    userData.age = userStoreData.age;
  }
  if (userStoreData.birthdate) {
    userData.birthdate = userStoreData.birthdate;
  }
  if (userStoreData.gender) {
    userData.gender = userStoreData.gender;
  }

  localStorage.setItem('user', JSON.stringify(userData))
})

export default store;