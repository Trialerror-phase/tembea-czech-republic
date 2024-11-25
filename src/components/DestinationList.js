import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import destinations from './Destinations';

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 4 items per row when space allows */
    gap: 20px; /* Space between cards */
    padding: 20px;
`;

const Card = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-5px);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 15px;
`;

const CardButton = styled.button`
    background: #3498db;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
`;

const DestinationList = () => {
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((favId) => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    return (
        <div style={{ backgroundColor: "#c8e2fa", padding: "2%" }}>
            <List>
                {destinations.map((destination) => (
                    <Card key={destination.id}>
                        <Link
                            to={`/destination/${destination.id}`}
                            style={{ textDecoration: 'none', color: '#333' }}
                        >
                            <CardImage src={destination.image} alt={destination.name} />
                            <CardContent>
                                <h3>{destination.name}</h3>
                                <h5>{destination.bestTime}</h5>
                                <h6>{destination.rating}</h6>
                            </CardContent>
                        </Link>
                        <CardButton onClick={() => toggleFavorite(destination.id)}>
                            {favorites.includes(destination.id)
                                ? 'Remove from Favorites'
                                : 'Add to Favorites'}
                        </CardButton>
                    </Card>
                ))}
            </List>
        </div>
    );
};

export default DestinationList;
