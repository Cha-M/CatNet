import React from "react";
import styled from 'styled-components';

//Feel free to change styling, just added some basics

const Title = styled.h1`
display: flex;
flex-direction: row;
height: 20%;
width: 90%;
font-size: 30px;
text-align: center;
color: #b47153;
`;

const Wrapper = styled.div`
padding: 15px;
width: 90%;
`

function Header() {
    return (
        <Wrapper>
            <Title>CatNet</Title>
        </Wrapper>
    )
}

export default Header;
