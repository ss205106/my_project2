import React from 'react';
import styled from 'styled-components';
import palette from '../../common/Pallete';
import Button from '../../common/Button';
const TemplateDiv = styled.div`
  
    // background:${ palette.Gray[2] };
    margin:10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FromBoxDiv = styled.div`
    // box-shadow: 0 0 8px rgba(0,0,0,0.25);
    padding: 2rem;
    width:250px;
    background: white;  
    border-radius: 2px;
    
    .logo{
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
`

const Template = ( {children} ) => {

    return (
        <TemplateDiv>
            <FromBoxDiv>
                
                {children}
            </FromBoxDiv>
        </TemplateDiv>
  
    );
};

export default Template;