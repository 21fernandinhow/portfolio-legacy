import { Fragment } from "react";
import Section from "./components/section";
import Song from "./components/music";
import "./css/style.css";

function App() {
  return (
    <Fragment>
      <Song/>
      <Section/>
    </Fragment>
  );
}

export default App;
