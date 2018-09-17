import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        window.addEventListener("did_mount", this.onDidMountHandler)
    }

    render() {
        return (
            <Navbar brand="Logo">
                <NavItem href='#'>Home</NavItem>
                <NavItem href='#'>About us</NavItem>
                <NavItem href='#'>Support</NavItem>

                <div className="registration">
                    <NavItem href='#'>Log in</NavItem>
                    <NavItem href='#'>Sign up</NavItem>
                </div>
            </Navbar>
        );
    }

    componentWillUnmount() {
        window.removeEventListener("did_mount", this.onDidMountHandler);
    }

    onDidMountHandler(e) {
        // alert(e.detail);
    }
}