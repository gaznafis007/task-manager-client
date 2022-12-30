import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
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
        element: <AddTask></AddTask>,
      },
      {
        path: "mytask",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "/donetask",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
      },
    ],
  },
]);
