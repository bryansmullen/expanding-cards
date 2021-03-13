import React from 'react';
import Panel from './Panel';
import styled from 'styled-components';

const PanelsDiv = styled.div`
    display: flex;
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 480px) {
        width: 100%;
        .panel:nth-of-type(4),
        .panel:nth-of-type(5) {
            display: none;
        }
    }
`;

const panels = [
    {
        key: 1,
        link: 'https://unsplash.com/@dirfoxxcalledmoon',
        name: 'Brandon Webb',
        backgroundUrl:
            'https://images.unsplash.com/photo-1615561010052-381972c6b92c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    },
    {
        key: 2,
        link: 'https://unsplash.com/@taiamint',
        name: 'Taisiia Stupak',
        backgroundUrl:
            'https://images.unsplash.com/photo-1615580447900-00474c27a200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    },
    {
        key: 3,
        link: 'https://unsplash.com/@seanbenesh',
        name: 'Sean Benesh',
        backgroundUrl:
            'https://images.unsplash.com/photo-1615621720189-29bd695f0a6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    },
    {
        key: 4,
        name: 'Brigitte Baranyi',
        link: 'https://unsplash.com/@briivegan',
        backgroundUrl:
            'https://images.unsplash.com/photo-1615499463674-f906bcc3de26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    },
    {
        key: 5,
        name: 'Ola Dybul',
        link: 'https://unsplash.com/@oladybul',
        backgroundUrl:
            'https://images.unsplash.com/photo-1615474634824-f45fb12b24a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    },
];

const Panels = function (): React.ReactElement {
    return (
        <PanelsDiv>
            {panels.map((panel) => (
                <Panel key={panel.key} name={panel.name} link={panel.link} backgroundUrl={panel.backgroundUrl} />
            ))}
        </PanelsDiv>
    );
};

export default Panels;
