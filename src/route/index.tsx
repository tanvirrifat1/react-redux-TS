import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homes from "../page/Homes";
import Logins from "../page/Logins";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homes />,
  },
  {
    path: "/login",
    element: <Logins />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
