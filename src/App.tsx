import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Routing from "./routes";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routing />
    </Fragment>
  );
}

export default App;
