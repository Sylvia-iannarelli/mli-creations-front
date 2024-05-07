import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/home/SingleProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element:<Home/>
        }, 
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        }
      ]
    },
  ]);
  

export default router
