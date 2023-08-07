import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I am a full-stack developer based in India!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" align="center">
                        SD614 Apps
                    </Heading>
                    <p align="center">Web-Dev | Databases | Testing | Data Science | AI</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page