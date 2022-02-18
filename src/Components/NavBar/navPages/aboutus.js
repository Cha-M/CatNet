import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: #b47153;
`;

function AboutUs() {
    return (
        <div>
            <Title>About Us</Title>
            <h2>We have thousands of different feline companions ready to join your family!</h2>
            <h3>We believe cats deserve a loving home where they are treated with kindness and understanding.</h3>
        </div>
    )
}

export default AboutUs
