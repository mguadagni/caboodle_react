import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import products from '../../assets/products.jpg';

const Home = () => {
    return (
        <Container>
            <Splash image={products} style={{color:"#6A5ACD"}}>
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
