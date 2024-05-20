
import AdminRoot from "../pages/admin/AdminRoot"

import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import ShopPage from "../pages/site/SHOP/Shopcarts.jsx"



import SiteRoot from "../pages/site/SiteRoot"
import Basket from "../pages/site/basket/basket"
import DetailPage from "../pages/site/detailpage/DetailPage"
import Home from "../pages/site/home/home"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },{

                path:"/basket",
                element:<Basket/>
            },{
                path:"det/:id",
                element:<DetailPage/>
            },{
                path:"/store",
                element:<ShopPage/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
          
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;