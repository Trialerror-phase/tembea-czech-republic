import React from 'react';
import styled from 'styled-components';

const TravelContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    text-align: center;
`;

const TravelHeading = styled.h1`
    color: #333;
    margin-bottom: 20px;
`;

const TravelSection = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`;

const TravelCard = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: left;
`;

const TravelButton = styled.button`
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
`;

const Travel = () => {
    return (
        <TravelContainer>
            <TravelHeading>Plan Your Next Adventure</TravelHeading>
            <TravelSection>
                <TravelCard>
                    <h3>Explore Guides</h3>
                    <p>Get in-depth information about your next destination.</p>
                    <TravelButton>Learn More</TravelButton>
                </TravelCard>
                <TravelCard>
                    <h3>Plan Itineraries</h3>
                    <p>Customize your travel plans effortlessly.</p>
                    <TravelButton>Start Planning</TravelButton>
                </TravelCard>
                <TravelCard>
                    <h3>Save on Travel</h3>
                    <p>Discover exclusive deals on flights and hotels.</p>
                    <TravelButton>Find Deals</TravelButton>
                </TravelCard>
            </TravelSection>
        </TravelContainer>
    );
};

export default Travel;
