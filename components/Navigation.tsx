import React from 'react'
import Link from "next/link"

const Navigation = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    {' '}|{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    {' '}|{' '}
    <Link href="/api/hello">
      <a>API</a>
    </Link>
  </nav>
)

export default Navigation;
