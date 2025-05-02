import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const [phones, setPhones] = useState(data)
    const handleSearch = (e, text) => {
        e.preventDefault()
        const searchedPhones = data.filter(phone =>
            phone?.name?.toLowerCase().splilt(" ").includes(text.toLowerCase()) ||
            phone?.brand?.toLowerCase().splilt(" ").includes(text.toLowerCase())
        )
        console.log(searchedPhones);
        setPhones(searchedPhones)
    }

    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;