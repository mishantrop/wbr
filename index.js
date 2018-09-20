import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appNode = document.getElementById('app');
appNode ? ReactDOM.render(<App text="text from props" />, appNode) : false;
