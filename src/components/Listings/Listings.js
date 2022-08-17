import React, {Fragment, useState, useEffect, useContext} from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import Container from '../common/Container';
import Listing from '../Listings/Listing';
import axios from 'axios';
import { apiHostUrl } from '../../config';
import {useNavigate} from 'react-router-dom';
import Button from '../common/Button';

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

        setListings(listingRes);
        setLoading(false);
        //console.log(listingRes);

      } catch (error){
      console.error(error.response ? error.response.data : error.message)
    }
  }
  getListings();
  }, [])

  const displayListings = () => {
    //console.log(listings.data);
    return listings.data.map(listing => {
      return (
      <Listing listing = {listing}/>
      )
    })
  }

  const navigate = useNavigate();

  const handleCreateListing = (e) => {
    navigate('/createListing');
  }

  return (
    <Container>
      <h1>Listings</h1>
      <button onClick={handleCreateListing}>Post a Listing</button>

      {loading ? (<p>Loading...</p>) : 
        displayListings()
      }
    </Container>
  )
}
export default Listings;