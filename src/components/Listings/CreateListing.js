import axios from 'axios';
import React, {useState, useContext} from 'react';
import Container from '../common/Container';
import CreateListingForm from './CreateListingForm';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';

const CreateListing = () => {

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
            const listingRes = await axios.post(`${apiHostUrl}/listings/`, 
            query, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });

            navigate('/listings');
        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
            alert("Listing Post Error. Please try again.")
        }
    }

    return (
        <Container>
            <CreateListingForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}

export default CreateListing;