import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import products from '../../assets/products.jpg';
import shopfront from '../../assets/shopfront.jpg';

const Home = () => {
    return (
        <Container>
            <Splash image={shopfront} style={{color:"#DC143C"}}>
                <h1 style={{textShadow: "1px 0 0 white, 0 -1px 0 white, 0 1px 0 white, -1px 0 0 white"}}>
                    Welcome to Caboodle!
                </h1>
                
                <h2 style={{textShadow: "1px 0 0 white, 0 -1px 0 white, 0 1px 0 white, -1px 0 0 white"}}>
                    Buy, Sell, and Trade Endless Products!
                </h2>
            </Splash> 
        </Container>
    )
}
export default Home;
