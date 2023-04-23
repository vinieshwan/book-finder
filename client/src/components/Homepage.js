import {  Accordion, Container, Stack, Title, Card, Text, Rating, Group, Avatar, BackgroundImage, Button, Image } from '@mantine/core';
import { IconChevronUp, IconChevronRight } from '@tabler/icons-react';
import User from '../assets/user.png'
import BinanceGray from '../assets/binance-gray.svg'
import BinanceWhite from '../assets/binance-white.svg'
import Bitcoin from '../assets/bitcoin.svg'
import Solana from '../assets/solana.svg'
import Ethereum from '../assets/ethereum.svg'
import Tether from '../assets/tether.svg'
import XRP from '../assets/xrp.svg'
import Banner from '../assets/banner.png'
import Hero from '../assets/hero.svg'
import GroupPic from '../assets/group.png'
import PackageBox from '../assets/box.svg'
import Help from '../assets/help.svg'
import Piggy from '../assets/piggy.svg'
import Book1 from '../assets/book1.png'
import Book2 from '../assets/book2.png'
import Book3 from '../assets/book3.png'

export const Homepage = () => {
    return (
        <div>
            <div style={{backgroundColor: "#fff"}}>
                <BackgroundImage src={Banner}>
                    <Container size="lg" py={50}>
                        <Group>
                            <Group style={{flexGrow: 1}}>
                                <Stack>
                                    <Title color="#151C55" order={1}>The Cheapest<br />Textbooks</Title>
                                    <Title color="#6260F5" order={5}>Save Up To 90% On Millions<br />Of Titles</Title>
                                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                                        sed diam nonumy eirmod tempor invidunt ut labore et<br />
                                        dolore magna.
                                    </Text>
                                    <Button radius="md" size="md" color="violet" style={{backgroundColor: '#6260F5', boxShadow: '0px 8px 15px #6260f55e', width: "50%"}}>Get Started <IconChevronRight /></Button>
                                </Stack>
                            </Group>
                            <Group><Image maw={600} src={Hero} /></Group>
                        </Group>
                    </Container>
                    <Container size="lg" py={50}>
                        <Group>
                            <Group><Image maw={600} src={GroupPic} /></Group>
                            <Group style={{flexGrow: 1}}>
                                <Stack>
                                    <Title order={1} color="#fff">Our Commitment</Title>
                                    <Text color="#fff">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                                        sed diam nonumy eirmod tempor invidunt ut labore et<br />
                                        dolore magna aliquyam erat, sed diam voluptua. At<br />
                                        vero eos et accusam et justo duo dolores et ea rebum
                                    </Text>
                                    <Button radius="md" size="md" color="indigo" style={{backgroundColor: '#151C55', boxShadow: '0px 8px 15px #5D6EC8', color: "#60D2FA", width: "50%"}}>Learn More <IconChevronRight /></Button>
                                </Stack>
                            </Group>
                        </Group>
                    </Container>
                    <Container size="lg" py={50}>
                        <Title align="center" order={1} color="#fff">Trusted By Awesome <span style={{color: "#F5C644"}}>Clients</span></Title>
                        <Group spacing={20} position="center" pt={20}>
                            <Group>
                                <img src={BinanceWhite} width={32} /> <Text color="#fff" fw={600}>Binance</Text>
                            </Group>
                            <Group>
                                <img src={Bitcoin} width={32} /> <Text color="#fff" fw={600}>Bitcoin</Text>
                            </Group>
                            <Group>
                                <img src={Solana} width={32} /> <Text color="#fff" fw={600}>Solana</Text>
                            </Group>
                            <Group>
                                <img src={Ethereum} width={32} /> <Text color="#fff" fw={600}>Ethereum</Text>
                            </Group>
                            <Group>
                                <img src={Tether} width={32} /> <Text color="#fff" fw={600}>Tether</Text>
                            </Group>
                            <Group>
                                <img src={XRP} width={32} /> <Text color="#fff" fw={600}>XRP</Text>
                            </Group>
                        </Group>
                    </Container>
                </BackgroundImage>
            </div>
            <div style={{backgroundColor: "#fff"}}>
                <Container size="lg" py={50} style={{position: "relative"}}>
                    <Title pb={20} align="center" order={1}>Explore Our Books</Title>
                    <Text align="center"  pb={200} >
                        With our dedicated customer support team, you can rest easy knowing that we’re doing everything<br />
                        we can to save you time, money, and stress.
                    </Text>
                    <div style={{position: "absolute", zIndex: 1, marginTop: -120, left: "15%"}}>
                    <Group spacing={100} position="center">
                        <Group>
                            <Stack>
                                <Image maw={200} radius="xs" src={Book1} style={{borderImage: "linear-gradient(#fff, #899AAE) 3", borderWidth:5, borderStyle: "solid"}}/>
                                <Title order={4} color="#fff">Doughnuts And Doom</Title>
                                <a href="/#" style={{color: "#5ED1F9", display: "inline-block"}}><span>View Book Details</span> <span><IconChevronRight style={{verticalAlign: "middle", display: "inline-block"}} /></span></a>
                            </Stack>
                        </Group>
                        <Group>
                            <Stack>
                            <Image maw={200} radius="xs" src={Book2} style={{borderImage: "linear-gradient(#fff, #899AAE) 3", borderWidth:5, borderStyle: "solid"}}/>
                                <Title order={4} color="#fff">The Bend Of Luck</Title>
                                <a href="/#" style={{color: "#5ED1F9", display: "inline-block"}}><span>View Book Details</span> <span><IconChevronRight style={{verticalAlign: "middle", display: "inline-block"}} /></span></a>
                            </Stack>
                        </Group>
                        <Group>
                            <Stack>
                                <Image maw={200} radius="xs" src={Book3} style={{borderImage: "linear-gradient(#fff, #899AAE) 3", borderWidth:5, borderStyle: "solid"}}/>
                                <Title order={4} color="#fff">The Underwater Welder</Title>
                                <a href="/#" style={{color: "#5ED1F9", display: "inline-block"}}><span>View Book Details</span> <span><IconChevronRight style={{verticalAlign: "middle", display: "inline-block"}} /></span></a>
                            </Stack>
                        </Group>
                    </Group>
                    </div>
                </Container>
                <div style={{backgroundColor: "#061B36", transform: "skewY(-3deg)", width: "100%", height: "auto"}}>
                    <Container size="lg" pt={250} pb={100} style={{transform: "skewY(3deg)", color:"#fff"}}>
                        <Text size="xs" color="#f5c644">LOREM IPSUM</Text>
                        <Title order={1}>3 Reasons To Shop With Us</Title>
                        <Group spacing={50} pt={50}>
                            <Group>
                                <Stack>
                                    <Image maw={32} src={PackageBox} />
                                    <Title order={5}>
                                    All textbook rentals come<br />
                                    with free return shipping.
                                    </Title>
                                    <Text size="sm">
                                    Lorem ipsum dolor sit amet, consetetur<br />
                                    sadipscing elitr, sed diam nonumy eirmod tempor<br />
                                    invidunt ut labore et dolore Stet clita kasd<br />
                                    gubergren, no sea takimata.
                                    </Text>
                                </Stack>
                            </Group>
                            <Group>
                                <Stack>
                                    <Image maw={32} src={Help} />
                                    <Title order={5}>
                                    Dedicated customer<br />
                                    support and help portal.
                                    </Title>
                                    <Text size="sm">
                                    Lorem ipsum dolor sit amet, consetetur<br />
                                    sadipscing elitr, sed diam nonumy eirmod tempor<br />
                                    invidunt ut labore et dolore Stet clita kasd<br />
                                    gubergren, no sea takimata.
                                    </Text>
                                </Stack>
                            </Group>
                            <Group>
                                <Stack>
                                    <Image maw={32} src={Piggy} />
                                    <Title order={5}>
                                    Buy or rent cheap textbooks<br />
                                    & save up to $500 per year!
                                    </Title>
                                    <Text size="sm">
                                    Lorem ipsum dolor sit amet, consetetur<br />
                                    sadipscing elitr, sed diam nonumy eirmod tempor<br />
                                    invidunt ut labore et dolore Stet clita kasd<br />
                                    gubergren, no sea takimata.
                                    </Text>
                                </Stack>
                            </Group>
                        </Group>
                    </Container>
                </div>
            </div>
            <div style={{backgroundColor: "#fff"}}>
                <Container size="lg" py={100}>
                    <Stack px={200} py={50} align="center">
                        <Text fw={600} style={{lineHeight: .50}}>Andrew Santellan</Text>
                        <Text color="#60D2FA" size="sm" style={{lineHeight: .50}}>Product Manager, Binance</Text>
                        <Group style={{verticalAlign: 'middle'}}><img src={BinanceGray} width={32} /> <Text color="#898EA9" fw={600}>Binance</Text></Group>
                    </Stack>
                    <Stack px={200}  style={{position: "relative"}}>
                        <Avatar size="lg" src={User} style={{position: "absolute", left: "48%", top: "-30px", zIndex: 1}} />
                        <div style={{backgroundColor: "#D9E9FD", width: 710, height: 20, top: -15, borderRadius: 5, marginLeft: 15, position: 'absolute'}}></div>
                        <Card padding="lg" radius="md" withBorder={false} style={{backgroundColor: "#4399F7"}}>
                            <Text align="center" color="#fff" pt={30}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br />
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam<br />
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et<br />
                            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est<br />
                            Lorem ipsum dolor sit amet.
                            </Text>
                            <Group position="center" pt={30}><Rating defaultValue={5} /></Group>
                        </Card>
                    </Stack>
                </Container>
            </div>
            <div style={{backgroundColor: "#F2F5F8"}}>
                <Container size="lg" py={100}>
                    <Stack px={200}>
                        <Title order={1} color="#151C55">Frequently Asked Question</Title>
                        <Accordion defaultValue="dedicated-customer" chevron={<IconChevronUp size="1rem" />}>
                            <Accordion.Item value="dedicated-customer">
                                <Accordion.Control style={{padding: 0, color: '#6260F5', fontWeight: 600}}>Dedicated customer support and help portal.</Accordion.Control>
                                <Accordion.Panel py={20}>With our dedicated customer support team, you can rest easy knowing that we’re doing
    everything we can to save you time, money, and stress.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="lorem1">
                                <Accordion.Control style={{padding: 0, color: '#6260F5', fontWeight: 600}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Control>
                                <Accordion.Panel py={20}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="lorem2">
                                <Accordion.Control style={{padding: 0, color: '#6260F5', fontWeight: 600}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Control>
                                <Accordion.Panel py={20}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="lorem3">
                                <Accordion.Control style={{padding: 0, color: '#6260F5', fontWeight: 600}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Control>
                                <Accordion.Panel py={20}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}