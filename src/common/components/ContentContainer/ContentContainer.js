import React from "react";
import styled from "styled-components";

const ContentContainer = styled(({ className, children }) => {
    return <div className={className}>{children}</div>
})`
    margin: 0 auto;
    width: 1100px;
`;

export default ContentContainer;