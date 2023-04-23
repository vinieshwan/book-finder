import { useContext } from 'react';
import { Header, Group, TextInput, BackgroundImage, Center, Text, Box, Container, Button, Image } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../assets/xyz-logo.svg';
import TopBanner from '../assets/top-banner.png';
import Globe from '../assets/globe.svg';

import { IsbnContext } from "../App";

const links = [
  {
    label: 'Home',
    link: '/#'
  },
  {
    label: 'Rent Textbooks',
    link: '/#'
  },
  {
    label: 'Buy TextBooks',
    link: '/#'
  },
  {
    label: 'Sell TextBooks',
    link: '/#'
  }
]

export const HeaderBar = () => {
  const {isbn, setIsbn} = useContext(IsbnContext);

  const items = links.map((link) => (
    <a
      key={link.label}
      style={{fontWeight: '500'}}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    setIsbn(formData.get('isbn-input'));

    window.location.replace(`/book/${formData.get('isbn-input')}`);

  }

  return (
    <Header withBorder={false}>
      <Box>
        <BackgroundImage
            src={TopBanner}
          >
          <Center>
            <Text color="#fff" py={8}>Save up to $500 per year on millions of book titles!</Text>
          </Center>
        </BackgroundImage>
      </Box>
      <Container size="lg">
        <Group py={20} spacing={80}>
          <Group><a href="/#"><Image src={Logo} /></a></Group>
          <Group style={{flexGrow: 1}}>
          <form method="post" onSubmit={handleSubmit}>
            <TextInput
              radius="lg"
              name="isbn-input"
              placeholder="Search"
              defaultValue={isbn}
              icon={<IconSearch size="1rem" />}
            />
          </form>
          </Group>
          <Group>{items} | <a href='/#'><img style={{verticalAlign: 'middle'}} src={Globe} />&nbsp;En</a> <Button radius="md" color="violet" style={{backgroundColor: '#6260F5', boxShadow: '0px 8px 15px #6260f55e'}}>Settings</Button></Group>
        </Group>
      </Container>
    </Header>
  );
}