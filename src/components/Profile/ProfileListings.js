import React, {Fragment, useState, useEffect, useContext} from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import { apiHostUrl } from '../../config';

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

    return (
        <h3>Profile Listings</h3>
    )
}

export default ProfileListings;