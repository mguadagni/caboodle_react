import React, {useState} from 'react';
import axios from 'axios';
import Container from '../common/Container';
import SignUpForm from './SignUpForm';
import {useNavigate} from 'react-router-dom';
import {apiHostUrl} from '../../config';

const SignUp = (props) => {

    const [newUser, setNewUser] = useState({
        email: '',
        fName: '',
        lName: '',
        age: '',
        username: '',
        password: '',
    })

    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]:value
        })
    }

    const onSubmit = () => {
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`

        createUser(data);
    }

    const createUser = async(data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
            console.log(res.data);
            login(data);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            console.log(res.data);
            createProfile(data, res.data.accessToken);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const createProfile = async (data, token) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/profiles/`, 
            data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            console.log(res.data);
            navigate('/login');
        } catch (err) {
            console.error(err.response.data);
        }
    }

    return (
        <Container>
            <SignUpForm 
            newUser={newUser} 
            onChange={updateForm} 
            onSubmit={onSubmit}
            />
        </Container>
    )
}

export default SignUp;