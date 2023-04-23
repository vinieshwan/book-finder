import { Title, Container } from '@mantine/core';
import { useContext } from 'react';
import { IsbnContext } from "../App";

export const Error = () => {
    const {error} = useContext(IsbnContext)

    return (
        <Container size="lg" py={100}>
            <Title px={60} order={1} color="#151C55">Search Result</Title>
            <Title align="center" pt={100} order={3} color="#505F70">{error}</Title>
        </Container>
    )
}