import PrivateRoute from "../Components/Private/PrivateRoute";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyTasks from "../Pages/MyTasks/MyTasks";
import Signup from "../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "mytask",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/donetask",
        element: (
          <PrivateRoute>
            <CompletedTask></CompletedTask>
          </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
