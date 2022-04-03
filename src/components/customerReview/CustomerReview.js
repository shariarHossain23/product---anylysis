import React from "react";

const CustomerReview = ({ personReview }) => {
  const { picture, name, rating, review } = personReview;
  return (
    <div>
      <div className="shadow-2xl p-4 mb-4 rounded-2xl">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full" src={picture} alt="" />
          <h2 className="ml-2">
            review by <span className="text-amber-500 text-sm">{name}</span>
          </h2>
        </div>
        <h4 className="mt-4">Rating: {rating}</h4>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default CustomerReview;
