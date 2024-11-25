import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const BookingContainer = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
`;

const Booking = () => {
    const { id } = useParams(); // Get the destination ID from the URL

    return (
        <BookingContainer>
            <h2>Booking for Destination {id}</h2>
            <p>We are currently setting up booking for this destination.</p>
            <p>Please contact us for further details or check back soon!</p>
        </BookingContainer>
    );
};

export default Booking;
