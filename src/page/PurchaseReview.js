import React from 'react';
import Header from "../common/Header"
import Footer from "../common/Footer"
import StarRating from '../common/StarRating';
import "../css/PurchaseReview.css"
const PurchaseReview = () => {
    
    return (
        <div>
            <Header/>
            <div className='ReBody'>
                <div  className='ReContent'>
                    <h3>구매후기</h3>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PurchaseReview;