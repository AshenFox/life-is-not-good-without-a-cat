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

  return (
    <div className='food-container'>
      {!items.length ? (
        <div className='spinner' />
      ) : (
        items.map((item) => <FoodItem key={item._id} item={item} />)
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
