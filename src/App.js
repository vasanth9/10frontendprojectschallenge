import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./01-Pomodoro-Clock/pomodoroslice";
import Home from "./Home/Home";
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
