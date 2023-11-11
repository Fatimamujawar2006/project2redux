import React from "react";
import { Landing } from "./components/Landing";
import { Provider } from "react-redux";
import { configstore } from "./state/configstore";
function App() {
  const myStore=configstore();
  return (
    <Provider store={myStore}>
      <Landing />
    </Provider>
  );
}

export default App;
