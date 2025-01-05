import App from './app';
import { store } from '../helper/redux/Store';
import { Provider } from 'react-redux';
import { Text, View, Button } from "react-native";
import React, { Component, useState } from 'react';
import LoginLayout from "./login";
import UserProfile from '../helper/UserProfile'
import { logout } from '../helper/AccountApi'


export default function Index() {
  return(
    <Provider store={store}>
          <App />
    </Provider>
  )
}