import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Write from '../component/write/Write';
const ReviewWritePage = () => {
    return (
        <div>
            <Header/>
            <Write page="Review"/>
            <Footer/>
        </div>
    );
};

export default ReviewWritePage;