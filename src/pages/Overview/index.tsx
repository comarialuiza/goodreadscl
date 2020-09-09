import React from 'react';

import { Container } from './styles';
import Books from '../../containers/Books';
import Header from '../../components/Header';

const Overview: React.FC = () => {
    return (
        <Container className="container">
            <Header />
            <Books />
        </Container>     
    );
}

export default Overview;