// @ts-check

import Provider from "./Provider";
import Router from "./Router";

const App = ({ container, storage }) => {
  return (
    <Provider storage={storage} container={container}>
      <Router />
    </Provider>
  );
};

export default App;
