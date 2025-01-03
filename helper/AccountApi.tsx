import React from 'react';
import UserProfile from './UserProfile';

//@TODO: make IP configurable
const baseUrl = "http://172.27.117.143:8080"


export async function register(username: String, password: String): Promise<Response> {
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

  return await fetch(baseUrl + "/api/v1/account", options)
}

export async function login(username: String, password: String): Promise<Response> {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    },
  };

  return await fetch(baseUrl + "/api/v1/account", options)
}

export async function logout(): Promise<Response> {
  const options = {
    method: 'GET',
  };

  return await fetch(baseUrl + "/logout", options)
}