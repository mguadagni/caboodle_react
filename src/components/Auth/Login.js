import axios from 'axios';
import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../common/Container';
//import { AuthContext } from '../Providers/AuthProvider';
import LoginForm from './LoginForm';

const Login = () => {

    // //const [auth, setAuth] = useContext(AuthContext)
    // const navigate = useNavigate();

    // const updateForm = (field, value) => {
    //     setQuery({
    //         ...query,
    //         [field]:value
    //     })
    // }

    // const onSubmit = async () => {
    //     const data = query;

    //     try {
    //         const res = await axios.post(`http://localhost:8080/api/auth/signin/`, {}, {
    //             auth: {
    //                 username: query.id,
    //                 password: query.password
    //             }
    //         })

    //         //setAuth({id: res.data.id, name: res.data.username})
    //         navigate('/');
    //     } catch (error) {
    //         console.error(error.response ? error.response.data : error.message)
    //         alert("User not found. Please try again.")
    //     }
    // }

    return (
        <Container>
            <LoginForm />
        </Container>
    )
}
export default Login;