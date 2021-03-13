import React from 'react';
import styled from 'styled-components';
import Panels from './cypress/components/Panel/Panels';

const Header = styled.header`
    margin: 40px 0;
`;
const H1 = styled.h1`
    font-family: 'Press Start 2P', sans-serif;
    font-size: 2rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const Footer = styled.footer`
    margin: 40px 0;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1rem;
`;

const App = (): React.ReactElement => {
    return (
        <Container className="App">
            <Header>
                <H1>Expanding Cards</H1>
            </Header>
            <Panels />
            <Footer>Bryan Mullen {new Date().getFullYear()}</Footer>
        </Container>
    );
};

export default App;
