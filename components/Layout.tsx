import { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navigation from './Navigation'
import { Container } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Navigation />
    <Container maxWidth="80ch">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <Footer />
    </Container>
  </>
)
