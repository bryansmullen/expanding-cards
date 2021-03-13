import React from 'react';
import styled from 'styled-components';

const PanelDiv = styled.div`
    height: 100%;
    width: 18%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: flex 0.7s ease-in;
    &:hover {
        flex: 5;
        h3 {
            opacity: 1;
        }
    }

    h3 {
        color: #ffffff;
        font-size: 2rem;
        position: absolute;
        bottom: 20px;
        left: 20px;
        opacity: 0;
        font-family: Roboto, sans-serif;
        transition: opacity 0.9s ease-in-out;
    }
`;

interface Props {
    name: string;
    link: string;
    backgroundUrl: string;
}

const Panel: React.FC<Props> = ({ link, name, backgroundUrl }: Props) => {
    const onClick = () => {
        window.location.href = link;
    };

    return (
        <PanelDiv
            onClick={onClick}
            className="panel"
            style={{
                backgroundImage: `url(${backgroundUrl})`,
            }}
        >
            <h3>{name}</h3>
        </PanelDiv>
    );
};

export default Panel;
