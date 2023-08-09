import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center"
            >
                Hello, I am a full-stack developer based in India!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" align="center">
                        SD614 Apps
                    </Heading>
                    <p align="center">Web-Dev | Databases | Testing | Data Science | AI</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/sd614apps.jpeg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>SD614 Apps is a Software Automation Testing Professional with 13+ years of experience of testing Embedded,
                    Client-Server, Distributed Database Systems, using C, Python, REST APIs, SQL, LDAP, Robot Framework, Docker &
                    Kubernetes, with an avid interest in Data Science & Machine Learning, currently training LLMs for the most
                    prestigious AI research firm. Delving into Web Development as a side interest, and building {' '}
                    <NextLink href="/works/bodhitva">
                        <Link>Bodhitva</Link>
                    </NextLink>.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                            Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1984</BioYear>
                    Born in Silchar, Assam, India.
                </BioSection>
                <BioSection>
                    <BioYear>2005-2009</BioYear>
                    Completed Bachelor of Engineering in Computer Science from International Institute of
                    Information Technology (IIIT) Kolkata, West bengal, India.
                </BioSection>
                <BioSection>
                    <BioYear>2010-2017</BioYear>
                    Worked at Huawei Technologies India Private Limited, Bangalore, Karnataka, India.
                </BioSection>
                <BioSection>
                    <BioYear>2017-2022</BioYear>
                    Worked at Nokia Networks, Bangalore, Karnataka, India.
                </BioSection>
                <BioSection>
                    <BioYear>2022-Present</BioYear>
                    Working remotely at Turing, training LLMs for the most prestigious AI research organization.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤️
                </Heading>
                <Paragraph>
                    Music, Driving, Photography.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page