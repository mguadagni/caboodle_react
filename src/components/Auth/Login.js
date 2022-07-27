import axios from 'axios';
import React, {useState} from 'react';
import Container from '../common/Container';
import LoginForm from './LoginForm';

const Login = () => {
    const [query, setQuery] = useState({
        id:"",
        password:"",
    })

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
            alert(`Welcome back ${res.data.username}!`)
        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
        }
    }

    return (
        <Container>
            <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )
}
export default Login;