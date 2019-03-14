import React from "react";
import { connect } from "react-redux";
import "normalize.css";

const App = ({ name }) => {
    return (
        <div>
            Hello World {name}
        </div>
    )
}

const stateToProps = state => ({
    name: state.test.name
});

export default connect(stateToProps, null)(App);