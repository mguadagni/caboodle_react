import axios from 'axios';
import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../common/Container';
import LoginForm from './LoginForm';
import {AuthContext} from '../Providers/AuthProvider';
import { apiHostUrl } from '../../config';

const Login = () => {

    const [auth, setAuth] = useContext(AuthContext)
    //console.log(auth);

    const [query, setQuery] = useState({
        username: "",
        pasword:"",
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
            const res = await axios.post(`${apiHostUrl}/auth/signin`, query);
            const profileRes = await axios.get(`${apiHostUrl}/profiles/self`, {
                headers: {
                    Authorization: `Bearer ${res.data.accessToken}`
                }
            });

            setAuth({token: res.data.accessToken, profile: profileRes.data});
            navigate('/');
            //console.log(profileRes.data);
        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
            alert("Username or Password is incorrect. Please try again.")
        }
    }

    return (
        <Container>
            <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}
export default Login;