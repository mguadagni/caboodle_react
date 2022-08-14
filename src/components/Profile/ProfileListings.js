import React, {Fragment, useState, useEffect, useContext} from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import { apiHostUrl } from '../../config';
import ProfileListing from './ProfileListing';
import Container from '../common/Container';

const ProfileListings = () => {

    const [listings, setListings] = useState([]);
    const[loading, setLoading] = useState(true);
    const [auth] = useContext(AuthContext);

    useEffect(() => {
        const getProfileListings = async () => {
            try {
                const profileListingRes = await axios.get(`${apiHostUrl}/listings/profile/${auth.profile.id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });

                setListings(profileListingRes);
                setLoading(false);

            } catch (error) {
                console.error(error.response ? error.response.data : error.message)
            }
        }
        getProfileListings();
    }, [])

    const displayProfileListings = () => {
        return listings.data.map(listing => {
            return (
                <ProfileListing listing = {listing} />
            )
        })
    }

    return (
        <Container>
            {loading ? (<p>Loading...</p>) :
            displayProfileListings()
            }
        </Container>
    )
}

export default ProfileListings;