import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;

const BlogPost = styled.div`
    margin-bottom: 40px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
`;

const BlogTitle = styled.h2`
    color: #3498db;
`;

const BlogContent = styled.p`
    line-height: 1.6;
`;

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Top 5 Hidden Gems in the Czech Republic',
            content:
                'Discover some of the less-known but breathtaking destinations like Telč, Litomyšl, and the Moravian Karst...',
        },
        {
            id: 2,
            title: 'Cultural Tips for Kenyan Visitors in the Czech Republic',
            content:
                'Learn about Czech customs, greetings, and the importance of saying "dobrý den" (good day) when entering a room...',
        },
        {
            id: 3,
            title: 'Best Time to Visit Prague: A Month-by-Month Guide',
            content:
                'Each season in Prague offers something unique. From winter markets to summer beer gardens, find the best time for you...',
        },
    ];

    return (
        <BlogContainer>
            <h1>Travel Blog</h1>
            {posts.map((post) => (
                <BlogPost key={post.id}>
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogContent>{post.content}</BlogContent>
                </BlogPost>
            ))}
        </BlogContainer>
    );
};

export default Blog;
