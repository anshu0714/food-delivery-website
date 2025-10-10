import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BrowseMenu from "./pages/BrowseMenu/BrowseMenu";
import SpecialOffers from "./pages/SpecialOffers/SpecialOffers";
import Restaurants from "./pages/Restaurants/Restaurants";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import ErrorPage from "./layout/ErrorPage";

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
