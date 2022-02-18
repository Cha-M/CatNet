import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: #b47153;
`;


function ContactUs() {
    return (
        <div>
            <Title>Contact Us</Title>
            <h2>Address: CatNet Centre, North West, NW35 0PW.
                <p>Email: catnet@catz4lyf.com</p>
                <p>Phone: 0845 170 5643</p>
            </h2>
        </div>
    )
}

export default ContactUs