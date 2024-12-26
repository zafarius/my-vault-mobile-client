import { Text, View, Button } from "react-native";
import React, { Component, useState } from 'react';
import LoginLayout from "./login";

export default function Index() {
  const [login, setLogin] = useState(false);

  const handleUpdate = () => {
    console.log("triggerd")
    setLogin(true)
};

  if(login === false) {
    return <LoginLayout login={() => handleUpdate()} />
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
