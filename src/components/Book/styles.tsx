import styled from 'styled-components';

export const Container = styled.div`
    padding: 8px;
    background-color: var(--color-lighter);
    border-radius: 4px;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 12px;
    
    max-width: 260px;
    margin-bottom: 30px;

`;

export const Cover = styled.img`
    width: 100px;
    border-radius: 4px;
`;

export const Visual = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: var(--color-text-title);
`;

export const Author = styled.p`
    color: var(--color-text-complement);
    font-size: 1.3rem;
`;

export const Rating = styled.p``;

export const Button = styled.button`
    border: 0;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: var(--color-secundary);
    color: var(--color-text-in-secundary);
    font-size: 1.2rem;
    text-transform: uppercase;

    align-self: flex-end;
`;