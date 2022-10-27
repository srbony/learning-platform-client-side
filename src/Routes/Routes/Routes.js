import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckRoute from "../../Pages/CheckRoute/CheckRoute";
import Course from "../../Pages/Course/Course";

import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/Errorpage";
import Faq from "../../Pages/Faq/Faq";


import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [


            {
                path: '/',
                loader: () => fetch('http://localhost:5000/allCourses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/allCourses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allCourses/${params.id}`)

                }
            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>
            // },
            // {


            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                loader: () => fetch('http://localhost:5000/allCourses'),
                path: '/checkroute',
                element: <PrivateRoute><CheckRoute></CheckRoute></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    }

])