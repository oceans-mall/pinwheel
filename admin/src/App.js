import { Sidebar } from "./components/sideBar/Sidebar";
import { Topbar } from "./components/topBar/Topbar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import User from "./pages/user/User";
import { Home } from "./pages/home/Home";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductsList } from "./pages/productList/ProductsList";
import { Product } from "./pages/products/Product";
import { NewProduct } from "./pages/newProduct/newProduct";
import Login from "./pages/login/login";

const admin = true
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        { admin  &&
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductsList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
          }
      </Switch>
    </Router>
  );
}

export default App;
