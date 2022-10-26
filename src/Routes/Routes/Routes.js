import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/Errorpage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import LinkDetails from "../../Pages/LinkDettails/LinkDetails";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/allCourses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allCourses/${params.id}`),
                element: <LinkDetails></LinkDetails>

            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>
            // },
            {
              
                path: '/linkDetailse',
                element: <LinkDetails></LinkDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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