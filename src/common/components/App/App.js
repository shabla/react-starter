import React from "react";
import styled from "styled-components";
import "normalize.css";

import { HomePage } from "../../../modules/home"
import Navbar from "../Navbar/Navbar"

const StyledApp = styled.div`
    min-height: 100vh;
`

const StyledContent = styled.main`
    margin-top: 50px;
`

const App = () => {
    return (
        <StyledApp>
            <Navbar />
            <StyledContent>
                <HomePage />
            </StyledContent>
        </StyledApp>
    )
}

export default App;