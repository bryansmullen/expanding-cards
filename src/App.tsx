import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: Roboto, Tahoma, Sans-Serif;
    font-size: 3rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const App = (): JSX.Element => {
    return (
        <Container className="App">
            <H1>Project Starter</H1>
        </Container>
    );
};

export default App;
