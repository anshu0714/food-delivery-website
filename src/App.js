import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
