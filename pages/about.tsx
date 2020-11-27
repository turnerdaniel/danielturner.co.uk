import { Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Layout } from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Daniel Turner">
    <Heading size="2xl" mb={2}>About</Heading>
    <Text>This is the about page. Click <NextLink href="/"><Link>here</Link></NextLink> to go home</Text>
  </Layout>
)

export default AboutPage
