import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; 
import destinations from './Destinations'; 
import emailjs from 'emailjs-com';
import { Modal, Button, Form } from 'react-bootstrap';  // Import modal components

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
    const { id } = useParams(); 
    const destinationId = parseInt(id, 10); 
    const destination = destinations.find(
        (dest) => dest.id === destinationId
    );

    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [formData, setFormData] = useState({ name: '', email: '', date: '', message: '' }); // Form data state
    const [status, setStatus] = useState('');

    if (!destination) {
        return (
            <div style={{ textAlign: 'center' }}>
                Destination not found
            </div>
        );
    }

    // Handle input change in form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission and send email
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        emailjs
            .send(
                'service_laiebbc', // Your service ID
                'template_1a7shn8', // Your template ID
                formData,
                'lapgbzQ7SOQ36EeZn' // Your user ID
            )
            .then(
                (response) => {
                    setStatus('Booking request sent successfully!');
                    setFormData({ name: '', email: '', date: '', message: '' });
                    setShowModal(false); // Close the modal after successful submission
                },
                (error) => {
                    setStatus('Failed to send booking request. Please try again.');
                    console.error('Error:', error);
                }
            );
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

            <DetailButton onClick={() => setShowModal(true)}>Book Now</DetailButton> {/* Open modal on click */}

            {/* Modal for booking form */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Your Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formDate">
                            <Form.Label>Preferred Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {status && <p>{status}</p>}
        </DetailContainer>
    );
};

export default DestinationDetail;
