import React from 'react';

import { Container } from './styles';
import Book from '../../components/Book';

const Books: React.FC = () => {
    return (
        <Container>
            <p>I am a book container! Look:</p> 
            <Book/>
            <Book/>
            <Book/>
            <Book/> 
        </Container>
    );
}

export default Books;