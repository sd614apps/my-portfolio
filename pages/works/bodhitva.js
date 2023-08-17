import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bodhitva">
            <Container>
                <Title>
                    Bodhitva <Badge>2023</Badge>
                </Title>
                <P>
                A website dedicated to enhancing cognitive performance and unlocking the full potential of the human brain.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.bodhitva.in'>
                        https://www.bodhitva.in/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, ExpressJS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='https://www.bodhitva.in/blog'>
                        How to enhance cognitive power! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/bodhitva.png" alt="Bodhitva" />
                <WorkImage src="/images/works/bodhitva.png" alt="Bodhitva" />
            </Container>
        </Layout>
    )
}

export default Work