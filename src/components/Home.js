// Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    max-width: 800px;
    margin: auto;
    text-align: center;
    padding: 20px;
`;

const Heading = styled.h1`
    font-size: 2.5em;
    color: #3498db;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Heading>Welcome to The Heart of Europe</Heading>
            <Description>
                We specialize in creating unforgettable travel experiences for tourists
                from Kenya and other regions. Discover the beauty, culture, and history
                of the Czech Republic with personalized travel packages, expert guidance,
                and tailored itineraries. Let us make your journey truly memorable!
            </Description>
        </HomeContainer>
    );
};

export default Home;
