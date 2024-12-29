import React from 'react';

//@TODO: make IP configurable
const url = "http://172.27.117.143:8080/api/v1/account";


export async function register(username: String, password: String) :Promise<Response> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': username,
      'password': password
    })
  };

  return await fetch(url, options)
}

export async function login(username: String, password: String) :Promise<Response> {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    },
  };

  return await fetch(url, options)
}

//zafos
//123123123!