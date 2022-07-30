import axios from 'axios';
import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import LoginForm from './LoginForm';

const Login = () => {
    const [query, setQuery] = useState({
        id:"",
        password:"",
    })

    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value
        })
    }

    const onSubmit = async () => {
        const data = query;

        try {
            const res = await axios.get(`http://localhost:8080/api/auth/users/${query.id}`)
            setAuth({id: res.data.id, name: res.data.username})
            navigate('/');
        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
            alert("User not found. Please try again.")
        }
    }

    return (
        <Container>
            <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}
export default Login;