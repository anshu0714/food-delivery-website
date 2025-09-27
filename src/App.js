import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BrowseMenu from "./components/layout/BrowseMenu";
import SpecialOffers from "./components/layout/SpecialOffers";
import Restaurants from "./components/layout/Restaurants";
import TrackOrder from "./components/layout/TrackOrder";
import ErrorPage from "./components/layout/ErrorPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse-menu",
        element: <BrowseMenu />,
      },
      {
        path: "/special-offers",
        element: <SpecialOffers />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<RouterProvider router={appRouter} />);
