import React from "react";
import { Provider } from "react-redux";
import FoodContainer from "./components/FoodContainer";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <header className='header'>
          <h1>Ты сегодня покормил кота?</h1>
        </header>
        <main className='main'>
          <FoodContainer />
        </main>
      </div>
    </Provider>
  );
};

export default App;
