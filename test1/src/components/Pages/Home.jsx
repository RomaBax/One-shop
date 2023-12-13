import { Container } from '@chakra-ui/react'
import React from 'react'
import Products from '../App/main/products'

function Home() {
  return (
    <>
    <Container maxW={'1530px'}>
        <Products/>
    </Container>
    </>
  )
}

export default Home