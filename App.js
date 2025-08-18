import ReactDOM from "react-dom/client";

const FunctionalComponent = () => {
  return <h1>Namaste React using Functional Component! 🌟</h1>;
};

const functionalRoot = ReactDOM.createRoot(
  document.getElementById("root")
);
functionalRoot.render(<FunctionalComponent />);

