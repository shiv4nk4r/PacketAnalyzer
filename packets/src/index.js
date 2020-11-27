import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

function saveToLocalStorage(state) {
  try {
    const SerializedState = JSON.stringify(state);
    localStorage.setItem("networkInvestigator", SerializedState);
  } catch (e) {
    console.log(e);
  }
}

function LoadFromLocalStorage() {
  try {
    const SerializedState = localStorage.getItem("networkInvestigator");
    if (SerializedState == null) return undefined;
    return JSON.parse(SerializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const presistedState = LoadFromLocalStorage();

const store = createStore(
  allReducers,
  presistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
