import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-116px)]'>
                <h2>hello Error</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;