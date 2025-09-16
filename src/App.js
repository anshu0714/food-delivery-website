import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";

const App = () => (
  <>
    <Header />
    <Home />
  </>
);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
