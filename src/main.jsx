import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import CounterStore from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <Provider store={CounterStore}>
  
      <App />
    </Provider>
  </React.StrictMode>
);
