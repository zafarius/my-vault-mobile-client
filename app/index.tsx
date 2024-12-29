import { Text, View, Button } from "react-native";
import React, { Component, useState } from 'react';
import LoginLayout from "./login";

export default function Index() {
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLogin = (username: String) => {
    console.log("triggerd")
    setLoginStatus(true)
};

  if(loginStatus === false) {
    return <LoginLayout handleLogin={() => handleLogin()} />
} else {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text>Willkommen bei my-vault!</Text>

      </View>

  );
}
}
