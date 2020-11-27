import { Heading, Text } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Daniel Turner">
    <Heading size="2xl" mb={2}>Hi, I'm Daniel Turner 👋</Heading>
    <Text>
      This is some text to go underneath the header. Should not be too long but long enough so that the line wraps around. 
    </Text>
  </Layout>
)

export default IndexPage
