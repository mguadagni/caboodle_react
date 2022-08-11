import React, {Fragment, useState, useEffect, useContext} from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import Container from '../common/Container';
import ListingsForm from '../Listings/ListingsForm'
import ListingsData from './ListingsData';
import Listing from '../Listings/Listing';
import axios from 'axios';
import { apiHostUrl } from '../../config';

//2:39:00 timestamp

const Listings = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const getListings = async () => {
      try {

        const listingRes = await axios.get(`${apiHostUrl}/listings/`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });

        console.log(listingRes.data);

      } catch (error){
      console.error(error.response ? error.response.data : error.message)
    }
  }
  getListings();
  }, [])

  return (
    <Container>
        <h1>Listings</h1>
        {loading ? (<p>Loading...</p>) : (
          <Fragment>
            <Listing />
            <Listing />
          </Fragment>
        )}
    </Container>
  )
}
export default Listings;