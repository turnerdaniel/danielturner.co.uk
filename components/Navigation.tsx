import NextLink from "next/link"
import { Stack, Button } from '@chakra-ui/react'

const Navigation = () => (
  /* Currently doesn't provide link URL preview on browser. May cause issues with accessibility and SEO. 
  This hack allows next router to be used with buttons buttons. Other alternatives include: 
  https://github.com/chakra-ui/chakra-ui/issues/2248 or implement custom override. */
  <Stack as="nav" spacing={0} direction="row" justify="flex-end" maxWidth="900px" mx="auto" my={8}>
    <NextLink href="/" passHref>
      <Button variant="ghost">Home</Button>
    </NextLink>
    <NextLink href="/about" passHref>
      <Button variant="ghost">About</Button>
    </NextLink>
    <NextLink href="/api/hello" passHref>
      <Button variant="ghost">Stats</Button>
    </NextLink>
  </Stack>
)

export default Navigation;
