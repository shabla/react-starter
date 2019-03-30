import React from "react";
import { connect } from "react-redux";

import { ContentContainer } from "../../../../common";
import { getName } from "../../home.selectors";

import TodosPage from "../../../todos/components/TodosPage/TodosPage"

const HomePage = ({ name }) => {
    return (
        <ContentContainer>
            Hello World {name}

            <TodosPage />
        </ContentContainer>
    )
}

const stateToProps = state => ({
    name: getName(state)
});

export default connect(stateToProps, null)(HomePage);