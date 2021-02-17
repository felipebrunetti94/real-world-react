// @ts-check

import Provider from "./Provider";
import Router from "./Router";

const App = ({ container, cache }) => {
  return (
    <Provider cache={cache} container={container}>
      <Router />
    </Provider>
  );
};

export default App;
