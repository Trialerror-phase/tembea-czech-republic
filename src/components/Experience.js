import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 20px;
`;

const ReviewCard = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const ReviewerName = styled.h4`
    font-size: 1.2rem;
    color: #333;
`;

const ReviewText = styled.p`
    font-size: 1rem;
    color: #555;
`;

const Experience = () => {
    // Dummy reviews data
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            review: 'This was an amazing experience! Highly recommend it to anyone visiting the Czech Republic.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            review: 'A memorable trip! The destinations were beautiful, and the guides were so friendly.'
        },
        {
            id: 3,
            name: 'Chris Evans',
            review: 'Had a great time! The trip was well organized, and I felt safe throughout my journey.'
        },
    ];

    return (
        <ExperienceContainer>
            <h2>What Our Visitors Are Saying</h2>
            {reviews.map((review) => (
                <ReviewCard key={review.id}>
                    <ReviewerName>{review.name}</ReviewerName>
                    <ReviewText>{review.review}</ReviewText>
                </ReviewCard>
            ))}
        </ExperienceContainer>
    );
};

export default Experience;
