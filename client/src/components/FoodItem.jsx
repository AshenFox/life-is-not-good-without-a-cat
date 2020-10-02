import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleItem, toggleHover } from "../actions/mainActions";
import FoodItemContents from "./FoodItemContents";
import FoodItemStatus from "./FoodItemStatus";
import FoodSubtitle from "./FoodSubtitle";

const FoodItem = ({ item, main, toggleItem, toggleHover }) => {
  const { bucket } = main;
  const {
    _id,
    description,
    flavor,
    isInStock,
    weight,
    benefits,
    isHover,
  } = item;

  useEffect(() => {
    if (!isChosen && isHover) toggleHover(_id);
  });

  const onClick = (e) => {
    if (!isInStock) return;
    toggleItem(_id);
  };

  const onMouseLeave = (e) => {
    if (isChosen && !isHover) toggleHover(_id);
  };

  let isChosen = bucket[_id];

  return (
    <div
      className={`food-item${isInStock ? "" : " inactive"}${
        isChosen ? " selected" : ""
      }${isHover ? " hover" : ""}`}
    >
      <div
        className='food-item__body-container'
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        <div className='food-item__body'>
          <FoodSubtitle isHover={isHover} />
          <h2 className='food-item__title'>Нямушка</h2>
          <span className='food-item__description'>с {flavor}</span>
          <FoodItemContents benefits={benefits} />
          <div className='food-item__weight'>
            <span className='food-item__weight-value'>
              {`${weight}`.replace(".", ",")}
            </span>
            <span className='food-item__weight-units'>кг</span>
          </div>
          <div className='food-item__body-background' />
        </div>
        <div className='food-item__body-mask'></div>
      </div>
      <FoodItemStatus
        isInStock={isInStock}
        flavor={flavor}
        description={description}
        clickHandler={onClick}
      />
    </div>
  );
};

FoodItem.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

const mapDispatchToProps = {
  toggleItem,
  toggleHover,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
