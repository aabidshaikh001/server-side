import {createBrowserRouter} from 'react-router-dom'
import App from '../App.js'
import CheckEmail from '../pages/CheckEmail.js'
import Register from '../pages/Register.js'
import CheckPassword from '../pages/CheckPassword.js'
import Home from '../pages/Home.js'
import Message from '../component/Message.js'
import AuthLayouts from '../layout/index.js'
import Forgotpassword from '../pages/Forgot-password.js'

const router = createBrowserRouter([
   { 
    path: "/",
    element: <App/>,
    children:[
        {
            path: "register",
            element: <AuthLayouts><Register/></AuthLayouts>
        },
        {
            path: "email",
            element: <AuthLayouts><CheckEmail/></AuthLayouts>
        },
        {
            path: "password",
            element: <AuthLayouts><CheckPassword/></AuthLayouts>
        },
        {
            path: "forgot-password",
            element: <AuthLayouts><Forgotpassword/></AuthLayouts> 
        },
        {
            path:"",
            element:<Home/>,
            children:[
                {
                path:":userId",
                element:<Message/>
            }
        ]
        }
    ]
},
])
export default router