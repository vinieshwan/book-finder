import { useContext, useEffect } from 'react';
import { Container, Group, Title, Image, Stack, Text } from '@mantine/core';
import { Error } from "../components/Error"
import { useParams } from 'react-router-dom';

import { IsbnContext } from "../App";

export const Book = () => {
    const { id = '' } = useParams();

    const { book, error, setIsbn } = useContext(IsbnContext);

    useEffect(() => {
        if (id) {
            setIsbn(id);
        }
    }, [id, book])
   
    if (!book[0] && !error) {
        return <Title align="center" order={1} color="#51606b">Loading...</Title>;
    }

    if (error) {
        return <Error />;
    }

    const {image, title, authors, publisher, edition, currency, isbn, price, publication_year} = book[0];

    return (
        <Container size="lg" py={100}>
            <Title px={60} order={1} color="#151C55">Search Result</Title>
            <Group px={60} py={50} spacing={80} style={{alignItems: 'flex-start'}}>
                <Group><Image radius="lg" src={image} width={250} height={250} fit="fill" /></Group>
                <Group>
                    <Stack>
                        <Title color="#061B36" order={2}>{title}</Title>
                        <Title color="#061B36" py={10} order={5}>by {authors}</Title>
                        <Stack spacing={0}>
                            <Text fw={600}><span style={{color: "#061B36"}}>Edition:</span> <span style={{color: "#6260F5"}}>{edition}</span></Text>
                            <Text fw={600}><span style={{color: "#061B36"}}>Price:</span> <span style={{color: "#6260F5"}}>{currency} {price}</span></Text>
                            <Text fw={600}><span style={{color: "#061B36"}}>ISBN:</span> <span style={{color: "#6260F5"}}>{isbn}</span></Text>
                            <Text fw={600}><span style={{color: "#061B36"}}>Publication Year:</span> <span style={{color: "#6260F5"}}>{publication_year}</span></Text>
                            <Text fw={600}><span style={{color: "#061B36"}}>Publisher:</span> <span style={{color: "#6260F5"}}>{publisher}</span></Text>
                        </Stack>
                    </Stack>
                </Group>
            </Group>
        </Container>
    )
}