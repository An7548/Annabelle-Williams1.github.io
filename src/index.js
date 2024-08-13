import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    task: taskReducer
});

export default rootReducer;

import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './redux/store';
   import App from './App';

   ReactDOM.render(
       <Provider store={store}>
           <App />
       </Provider>,
       document.getElementById('root')
