import React from 'react'
import FetchApi from './FetchApi'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container >
      <h1 className='mt-3'>Students Details</h1>
      <FetchApi />
    </Container>
  )
}
