import { createBrowserRouter } from "react-router-dom";
import { Profile, Login } from '@layout';
import { Home, Error, Followers, Followings, Stars, Packages, Projects, Repositories } from '@pages';

const router = [
    {
        path: "/",
        element: <Profile />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/followers", element: <Followers />},
            { path: "/followings", element: <Followings />},
            { path: "/stars", element: <Stars />},
            { path: "/packages", element: <Packages />},
            { path: "/projects", element: <Projects />},
            { path: "/repositories", element: <Repositories />}
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Error />
    }
]

export const AppRouter = createBrowserRouter(router)