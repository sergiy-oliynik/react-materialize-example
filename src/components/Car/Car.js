import React, { Component } from 'react';

import "./Car.css";

export default class Car extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount: " + this.refs["car"]);
    }

    render() {
        return (
            <div ref="car" className="car">
                <img src="img/car-small.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi debitis doloremque est
                    expedita itaque modi mollitia necessitatibus nostrum, obcaecati omnis quos repellat tenetur voluptate.
                </p>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount: " + this.refs["car"]);
    }
}