import React, {useContext} from 'react';
import BorderCard from '../common/BorderCard';
import Button from '../common/Button';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import ProfileListings from './ProfileListings';
import {useNavigate} from 'react-router-dom';

const Profile = (props) => {

    const [auth, setAuth] = useContext(AuthContext);

    const navigate = useNavigate();

    const test = () => {
        console.log(auth.profile);
    }

    const onClick = () => {
        setAuth("");
        navigate('/');
    }

    return (
        <Container>
            <h1>Profile Page</h1>
            {/* {test()} */}
            <BorderCard style={{textAlign: "center", width:"40%"}}>
                <h2> Name: {auth.profile.name} </h2>
                <h3 style={{marginTop: "1px"}}>Username: {auth.profile.user.username}</h3>
                <h3 style={{marginTop: "1px"}}>Email: {auth.profile.user.email}</h3>
                <h3 style={{marginTop: "1px"}}>Age: {auth.profile.age} </h3>
                <h3 style={{marginTop: "1px"}}>Current Balance: ${auth.profile.balance} </h3>
            </BorderCard>
            <Button onClick={onClick} style={{backgroundColor: '#DC143C'}}>Log Out</Button>
            <h2 style={{marginTop: "2em"}}>Current Listings</h2>
            <ProfileListings />
            
        </Container>

    )
}
export default Profile;