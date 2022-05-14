import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
