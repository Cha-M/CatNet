import React from 'react';
import styled from 'styled-components';

//Feel free to change styling, just added some basics

const Title = styled.h1`
display: flex;
flex-direction: row;
height: 20%;
width: 70%;
font-size: 30px;
text-align: center;
color: #b47153;
`;

const Wrapper = styled.div`
padding: 15px;
<<<<<<< HEAD
width: 70%;`

function Header() {
    return (
        <Wrapper>
            <Title>CatNet</Title>
        </Wrapper>
    )
}

export default Header;