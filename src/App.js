import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/Home";
import Users from "./components/pages/users/Users";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newuser/NewUser";
import Products from "./components/pages/products/Products";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newproduct/NewProduct";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:3000/data.json");
      setUsers(res.data.userdata);
    };
    getUsers();
  }, []);

  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="main-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home users={users} />} />
            <Route
              path="/users"
              element={
                <Users users={users} setUsers={(user) => setUsers(user)} />
              }
            />
            <Route
              path="/users/:id"
              element={
                <User users={users} setUsers={(user) => setUsers(user)} />
              }
            />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
