import React from 'react'
import Container from '../common/Container';
import ListingsForm from '../Listings/ListingsForm'
import ListingsData from './ListingsData';

const Listings = () => {
  return (
    <Container>
        <h1>Listings</h1>
        <div>
        <ListingsForm />
        <ListingsData />
        </div>
    </Container>
  )
}
export default Listings;