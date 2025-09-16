import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
