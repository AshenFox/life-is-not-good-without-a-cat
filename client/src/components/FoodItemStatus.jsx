import React from "react";
import PropTypes from "prop-types";

const FoodItemStatus = ({ isInStock, description, clickHandler, flavor }) => {
  return (
    <div className='food-item__status'>
      {isInStock ? (
        <>
          <div className='food-item__message food-item__message--1'>
            Чего сидишь? Порадуй котэ,{" "}
            <a href='#!' onClick={clickHandler}>
              купи.
            </a>
          </div>
          <div className='food-item__message food-item__message--2'>
            {description}
          </div>
        </>
      ) : (
        <div className='food-item__message food-item__message--1'>
          Печалька, с {flavor} закончился.
        </div>
      )}
    </div>
  );
};

FoodItemStatus.propTypes = {
  isInStock: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default FoodItemStatus;
