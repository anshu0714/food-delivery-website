import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";

const App = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
