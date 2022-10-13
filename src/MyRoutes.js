import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/pages/First";
import Second from "./components/pages/Second";
import Third from "./components/pages/Third";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin"
import Signup from "./components/pages/Signup"
import ConfirmingUser from "./components/pages/ConfirmingUser";
import ViewCategories from "./components/pages/ViewCategories";
import TesterBester from "./components/pages/TesterBester";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminRoute from "./route/AdminRoute";
import PrivateRoute from "./route/PrivateRoute";
import AddCategory from "./components/pages/AddCategory";
import EditCategory from "./components/pages/EditCategory";
import ProductsAdmin from "./components/pages/ProductsAdmin";
import AddProduct from "./components/pages/AddProduct";


const MyRoutes = ()=>{
    return <Router>
        <Routes>

        
        {/* <Route path="/first" element={<First/>}/>
        <Route path="/second" element={<Second/>}/>
        <Route path="/third" element={<Third/>}/> */}

        <Route path="/" element={<Home/>}/>


        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

        {/* user side connection to the back end */}

        <Route path="/confirminguser/:token" element={<ConfirmingUser/>}/>
        <Route path="/viewcategories" element={<ViewCategories/>}/>

        <Route path="/tester" element={<TesterBester/>}/>


{/* creating an admin route */}
        <Route path="/" element={<AdminRoute/>}>

        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/addcategory" element={<AddCategory/>}/>
        <Route path="/category/edit/:element_id" element={<EditCategory/>}/>
        <Route path="/admin/products" element={<ProductsAdmin/>}/>
        <Route path="/admin/addproduct" element={<AddProduct/>}/>
       
        </Route>



{/* creating a private path by wrapping with an oulet and the private path if there is a success */}

<Route path="/" element={<PrivateRoute/>}>
{/* in this case the outlet is the First component */}
    <Route path="/user/profile" element={<First/>}/>
</Route>



        </Routes>



    </Router>

    

}
    

export default MyRoutes