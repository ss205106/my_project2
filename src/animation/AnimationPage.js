import React from 'react';
import styled from 'styled-components';
import Animation from './Animation';
const BodyDiv = styled.div`
width: 100%;
height: 70vh;
background-color: #000;
margin:0;
padding:0;
`

const AnimationPage = () => {
    return (
        <BodyDiv>
             <Animation/>
        </BodyDiv>
    );
};

export default AnimationPage;