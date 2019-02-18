import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';
import middlewares from './middlewares/index'

import MainRouter from '../src/router/MainRouter'


import "./index.less";


import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import user from './user/userReducer'

const reducers = combineReducers({
  auth,
  user,
})

export const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={esES}>
      <MainRouter />
    </LocaleProvider>
  </Provider>
, document.getElementById('app'));