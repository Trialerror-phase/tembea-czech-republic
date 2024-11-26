import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blogs from './blogs';

const BlogContainer = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;

const BlogCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
`;

const BlogImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const BlogContent = styled.div`
    padding: 15px;
`;

const BlogTitle = styled.h3`
    margin-bottom: 10px;
`;

const ReadMoreButton = styled(Link)`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    &:hover {
        background-color: #217dbb;
    }
`;

const BlogList = () => {
    return (
        <BlogContainer>
            {blogs.map((blog) => (
                <BlogCard key={blog.id}>
                    <BlogImage src={blog.image} alt={blog.title} />
                    <BlogContent>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <p>{blog.summary}</p>
                        <ReadMoreButton to={`/blog/${blog.id}`}>Read More</ReadMoreButton>
                    </BlogContent>
                </BlogCard>
            ))}
        </BlogContainer>
    );
};

export default BlogList;
