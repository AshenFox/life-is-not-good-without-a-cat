import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleItem } from "../actions/mainActions";
import FoodItemContents from "./FoodItemContents";
import FoodItemStatus from "./FoodItemStatus";

const FoodItem = ({ item, main, toggleItem }) => {
  const { bucket } = main;
  const { _id, description, flavor, isInStock, weight, benefits } = item;

  const onClick = (e) => {
    if (!isInStock) return;
    toggleItem(_id);
  };

  let isChosen = bucket[_id];

  return (
    <div
      className={`food-item ${isInStock ? "" : "inactive"}${
        isChosen ? "selected" : ""
      }`}
    >
      <div className='food-item__body-container' onClick={onClick}>
        <div className='food-item__body'>
          <h4 className='food-item__subtitle'>Сказочное заморское яство</h4>
          <h2 className='food-item__title'>Нямушка</h2>
          <span className='food-item__description'>с {flavor}</span>
          <FoodItemContents benefits={benefits}></FoodItemContents>
          <div className='food-item__weight'>
            <span className='food-item__weight-value'>
              {`${weight}`.replace(".", ",")}
            </span>
            <span className='food-item__weight-units'>кг</span>
          </div>
        </div>
      </div>
      <FoodItemStatus
        isInStock
        description={description}
        clickHandler={onClick}
      ></FoodItemStatus>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
