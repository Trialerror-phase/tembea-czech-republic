import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import blogs from './blogs';

const BlogDetailContainer = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;

const BlogImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const BlogTitle = styled.h2`
    margin-bottom: 20px;
`;

const BlogContent = styled.div`
    line-height: 1.6;
    color: #555;
`;

const BlogDetail = () => {
    const { id } = useParams();
    const blogId = parseInt(id, 10);
    const blog = blogs.find((b) => b.id === blogId);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <BlogDetailContainer>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogContent>
                <p>{blog.content}</p>
            </BlogContent>
        </BlogDetailContainer>
    );
};

export default BlogDetail;
