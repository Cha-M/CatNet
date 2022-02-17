import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size: 60px;
text-align: center;
color: #b47153;
`;

const Wrapper = styled.div`
padding: 15px;
`

function Header() {
    return (
        <Wrapper>
            <Title>CatNet</Title>
        </Wrapper>
    )
}

export default Header