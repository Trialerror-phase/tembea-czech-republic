import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactContainer = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    margin-top: 50px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const SubmitButton = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .send(
                'service_laiebbc', // Replace with your EmailJS service ID
                'template_gey0ctn', // Replace with your EmailJS template ID
                form,
                'lapgbzQ7SOQ36EeZn' // Replace with your EmailJS user ID
            )
            .then(
                (response) => {
                    setStatus('Message sent successfully!');
                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setStatus('Failed to send message. Please try again.');
                    console.error('Error:', error);
                }
            );
    };

    return (
        <ContactContainer>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="message">Message</Label>
                <TextArea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            {status && <p>{status}</p>}
        </ContactContainer>
    );
};

export default ContactForm;
