import React, {Component} from "react";

import {Link} from "react-router-dom";

export default class NavLinks extends Component {
    render() {
        return (
            <nav>
                <Link to={"/"} onClick={() => this.forceUpdate()}>
                    <button>Home</button>
                </Link>
                <Link to={"/favorites"} onClick={() => this.forceUpdate()}>
                    <button>Favs</button>
                </Link>
            </nav>
        );
    }
}
