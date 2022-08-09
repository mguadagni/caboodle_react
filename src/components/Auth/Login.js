import axios from 'axios';
import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../common/Container';
import LoginForm from './LoginForm';
import {AuthContext} from '../Providers/AuthProvider';

const Login = () => {

    const [auth, setAuth] = useContext(AuthContext)
    console.log(auth);

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
        const data = query;

        try {
            //const host = 
            const res = await axios.post(`http://localhost:8080/api/auth/signin/`, query);
            const profileRes = await axios.get(`http://localhost:8080/api/`)

            //setAuth({id: res.data.id, name: res.data.username})
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