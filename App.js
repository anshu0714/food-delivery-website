import ReactDOM from "react-dom/client";

const App = () => {
  return <div>
    <Header />
  </div>;
};

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);

const Header = () => {
  return <div>
    <div className="logo">
      <img src="https://reactjs.org/logo-og.png" alt="Food Delivery App Logo" />
    </div>
    <div className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Instamart</li>
      <li>Instamart</li>
    </div>
  </div>;
}
