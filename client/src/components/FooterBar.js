import {  Group, TextInput, Container, Image, Text, Stack, Footer, ActionIcon } from '@mantine/core';
import { IconMathGreater } from '@tabler/icons-react';
import Logo from '../assets/xyz-logo.svg';
import Chat from '../assets/chat.png';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

const menu = [
    {
      label: 'Shop All',
      link: '/#'
    },
    {
      label: 'About Us',
      link: '/#'
    },
    {
      label: 'Community',
      link: '/#'
    },
    {
      label: 'FAQs',
      link: '/#'
    }
].map((link) => (
    <a
      key={link.label}
      style={{fontWeight: '500'}}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
));

const supportAndResources = [
    {
      label: 'Shipping & Returns',
      link: '/#'
    },
    {
      label: 'Help & FAQ',
      link: '/#'
    },
    {
      label: 'Terms & Conditions',
      link: '/#'
    },
    {
      label: 'Privacy Policy',
      link: '/#'
    },
    {
      label: 'Contact',
      link: '/#'
    },
    {
      label: 'Login',
      link: '/#'
    }
].map((link) => (
    <a
      key={link.label}
      style={{fontWeight: '500'}}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
));

export const FooterBar = () => {
    return (
    <Footer withBorder={false}>
      <Container size="lg">
        <Group py={20} spacing={110} style={{alignItems: 'flex-start'}}>
          <Group>
            <Stack>
                <Image maw={125} src={Logo} />
                <Text>
                    Lorem ipsum dolor sit amet, consetetur<br />
                    sadipscing elitr, sed diam nonumy<br />
                    eirmod
                </Text>
                <TextInput
                radius="lg"
                name="isbn-input"
                placeholder="Email address"
                rightSection={<IconMathGreater color='#ced4da' size="1rem" />}
                />
            </Stack>
          </Group>
          <Group><Stack><Text fw={700}>Menu</Text>{menu}</Stack></Group>
          <Group><Stack><Text fw={700}>Support</Text>{supportAndResources}</Stack></Group>
          <Group><Stack><Text fw={700}>Resources</Text>{supportAndResources}</Stack></Group>
          <Group><Stack><br /><br /><br /><br /><br /><br /><br /><Image src={Chat} maw={72} /></Stack></Group>
        </Group>
      </Container>
      <Container size="lg">
        <Group style={{alignItems: 'center'}}>
        <Group style={{flexGrow: 1}}><Text>© 2022 Brainly.</Text></Group>
        <Group position="right">
            <ActionIcon variant="light" size="3rem" radius={30} color="#F2F2FF"><Image width={18} height={18} fit="contain" src={Facebook} /></ActionIcon>
            <ActionIcon variant="light" size="3rem" radius={30} color="#F2F2FF"><Image width={18} height={18} fit="contain" src={Linkedin} /></ActionIcon>
            <ActionIcon variant="light" size="3rem" radius={30} color="#F2F2FF"><Image width={18} height={18} fit="contain" src={Twitter} /></ActionIcon>
        </Group>
        </Group>
      </Container>
    </Footer>
    )
}