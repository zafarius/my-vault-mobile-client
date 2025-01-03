import { Text, View, Button } from "react-native";
import React, { Component, useState } from 'react';
import LoginLayout from "./login";
import UserProfile from '../helper/UserProfile'
import { logout } from '../helper/AccountApi'

export default function Index() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginState = (status: boolean) => {
    console.log("triggerd")
    setLoginStatus(status)
  };

  if (loginStatus === false) {
    return <LoginLayout loginState={(status: boolean) => loginState(status)} />
  } else {

    return (
      <>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Button
            onPress={() => {
              logout()
                .then(res => {
                  if (res.ok) {
                    UserProfile.setUserUUID("")
                    UserProfile.setUsername("")
                    setLoginStatus(false)
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            }}
            title="Logout"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text>Willkommen bei my-vault - {UserProfile.getUsername()}!</Text>
        </View>
      </>
    );
  }
}
