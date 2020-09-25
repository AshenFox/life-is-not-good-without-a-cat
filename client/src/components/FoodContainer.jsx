import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FoodItem from "./FoodItem";
import { getFoodItems } from "../actions/mainActions";

const FoodContainer = ({ main, getFoodItems }) => {
  const { items } = main;

  useEffect(() => {
    getFoodItems();
  }, []);

  let foodItemsArr = Object.values(items);

  return (
    <div className='food-container'>
      {!foodItemsArr.length ? (
        <div className='spinner' />
      ) : (
        foodItemsArr.map((item) => <FoodItem key={item._id} item={item} />)
      )}
    </div>
  );
};

FoodContainer.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

const mapDispatchToProps = {
  getFoodItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
