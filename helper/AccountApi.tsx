import React from 'react';

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