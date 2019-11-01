import React, { FunctionComponent } from 'react';
import { Container, TextHeader } from "./styles";

const Header:FunctionComponent = ({children}) => {
    return (
        <Container>
            <TextHeader>{children }</TextHeader>
        </Container>
    )
}

export default Header;