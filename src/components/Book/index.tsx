import React from 'react';

import { Container, Visual, Content, Cover, Title, Author, Rating, Button } from './styles';

const Book: React.FC = () => {
    return (
        <Container>
            <Visual>
                <Cover src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flilvakavivlu.files.wordpress.com%2F2019%2F10%2Fninth-house-leigh-bardugo.jpg%3Fw%3D789&f=1&nofb=1" />
            </Visual>
            <Content>
                <Title>Ninth House (Alex Stern, #1)</Title>
                <Author>Leigh Bardugo</Author>
                <Rating>4.8</Rating>
                
                <Button>Read more</Button>
            </Content>
        </Container>
    );
}

export default Book;