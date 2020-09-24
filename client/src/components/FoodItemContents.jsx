import React from "react";
import PropTypes from "prop-types";

const FoodItemContents = ({ benefits }) => {
  const { portions, mise, isClientHappy } = benefits;

  return (
    <ul className='food-item__contents'>
      {portions && (
        <li>
          {`${portions} `}
          {portions === 1 && "порция"}
          {portions < 5 && portions > 1 && "порции"}
          {portions >= 5 && "порций"}
        </li>
      )}
      {mise && (
        <li>
          {`${mise} `}
          {mise === 1 && "мышь"}
          {mise < 5 && mise > 1 && "мыши"}
          {mise >= 5 && "мышей"}
        </li>
      )}
      {isClientHappy && <li>заказчик доволен</li>}
    </ul>
  );
};

FoodItemContents.propTypes = {
  benefits: PropTypes.object.isRequired,
};

export default FoodItemContents;
