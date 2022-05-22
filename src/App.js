import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import CarDetails from "./components/CarDetails/CarDetails";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddProduct from "./components/AddProduct/AddProduct";
import Login from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Blogs from "./components/Blogs/Blogs";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/car_details/:carId"
          element={
            <RequireAuth>
              <CarDetails></CarDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage_inventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/add_product" element={<AddProduct></AddProduct>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
