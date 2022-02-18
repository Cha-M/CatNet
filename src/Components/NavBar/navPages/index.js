import { Link } from "react-router-dom";
import styled from 'styled-components'

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: #b47153;
`;
const subTitle = styled.h2`
font-size: 30px;
text-align: center;
`;


function Home() {
    return (
        <div>

            
            <Title>Welcome to CatNet</Title>
            <subTitle>A place to catch the perfect cat!</subTitle>
        </div>
    );
}

export default Home