import React from 'react';
import useReview from '../../Hooks/useReview';
import CustomerReview from '../customerReview/CustomerReview';

const Review = () => {
    const [reviews] = useReview()
    return (
        <div>
            <h1 className='text-4xl text-center mb-20'>Our customer Review</h1>
            <div className='md:grid grid-cols-3 gap-10'>
                {
                    reviews.map(personReview => <CustomerReview key={personReview.id} personReview={personReview}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Review;