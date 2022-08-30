import axios from 'axios';
import React, {useState, useContext} from 'react';
import Container from '../common/Container';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';
import {useNavigate, useParams} from 'react-router-dom';
import UpdateListingForm from './UpdateListingForm';

const UpdateListing = () => {

    const [auth] = useContext(AuthContext);

    const [query, setQuery] = useState({
        item: "",
        price:"",
        description: "",
        picture: ""
    })

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value
        })
    }

    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            const listingRes = await axios.put(`${apiHostUrl}/listings/updateListings/${listingId}`, 
            query, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            console.log(listingRes);
            navigate('/profile')

        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
            alert("Listing Post Error. Please try again.")
        }
    }

    let { listingId } = useParams();

    return (
        <Container>
            <UpdateListingForm onSubmit={onSubmit} query={query} updateForm={updateForm} />
        </Container>
    )
}

export default UpdateListing;