import React, {useContext} from 'react';
import BorderCard from '../common/BorderCard';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import ProfileListings from './ProfileListings';

const Profile = (props) => {

    const [auth] = useContext(AuthContext);

    const test = () => {
        console.log(auth.profile.name);
    }

    return (
        <Container>
            <h1>Profile Page</h1>
            {test()}
            <BorderCard>
                <h2> Name: {auth.profile.name} </h2>
                <h4 style={{marginTop: "1px"}}>Age: {auth.profile.age} </h4>
            </BorderCard>
            <h1 style={{marginTop: "3em"}}>Current Listings</h1>
            <ProfileListings />
        </Container>

    )
}
export default Profile;