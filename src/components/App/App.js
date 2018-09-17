import React, { Component } from 'react';
import Header from "../Header/Header";
import './App.css';
import HomePage from "../HomePage/HomePage";

export default class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <HomePage/>
        </div>
    );
  }
}
