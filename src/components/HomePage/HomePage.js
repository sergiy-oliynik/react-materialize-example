import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Car from "../Car/Car";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    {
                        arr.map((el, i) => {
                            return (
                                <Col key={i} s={12} m={6} l={4}>
                                    <Car/>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        );
    }

    componentDidMount() {
        dispatchEvent(new CustomEvent("did_mount", {
            detail: "Component did mount"
        }));
    }
}