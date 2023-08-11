import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBodhitva from '../public/images/works/bodhitva.png'
import thumbCareersWebsite from '../public/images/works/careers-website.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="bodhitva" title="Bodhitva" thumbnail={thumbBodhitva}>
                        A website dedicated to enhancing cognitive performance and unlocking the full potential of the human brain.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="careers-website" title="CareersWebsite" thumbnail={thumbCareersWebsite}>
                        Careers at SD614 Apps
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works