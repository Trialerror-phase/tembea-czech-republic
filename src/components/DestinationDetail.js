import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import destinations from './Destinations';

const DetailContainer = styled.div`
    max-width: 600px;
    margin: auto;
`;

const DetailImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const DetailButton = styled.button`
    background: #3498db;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
`;

const DestinationDetail = () => {
    const { id } = useParams(); // Extract the 'id' from the URL
    const navigate = useNavigate(); // Initialize the navigate function

    const destinationId = parseInt(id, 10); // Convert the 'id' to an integer
    const destination = destinations.find(
        (dest) => dest.id === destinationId
    );

    if (!destination) {
        return (
            <div style={{ textAlign: 'center' }}>
                Destination not found
            </div>
        );
    }

    // Define handleBooking
    const handleBooking = () => {
        navigate(`/book/${destination.id}`); // Navigate to the booking page
    };

    return (
        <DetailContainer>
            <h2>{destination.name}</h2>
            <DetailImage
                src={destination.image}
                alt={destination.name}
            />
            <p>{destination.description}</p>
            <p>
                Rating: {destination.rating || 'Not available'}
            </p>
            <p>
                Best time to visit: {destination.bestTime || 'Not specified'}
            </p>
            <DetailButton onClick={handleBooking}>Book Now</DetailButton>
        </DetailContainer>
    );
};

export default DestinationDetail;
