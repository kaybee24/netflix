import React from 'react';
import Main from '../components/Main.js';
import Row from '../components/Row.js';
import requests from '../Requests.js';

const Home = () => {
    return (
        <>
            <Main />
            <Row title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        </>
    )
}

export default Home;