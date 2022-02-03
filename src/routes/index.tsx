import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import { Route } from "./Route";
import { useAuth } from "../context/Auth/AuthContext";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";
import { Home } from "../pages/Home";
import Cart from "../pages/Cart";
import RequestUser from "../pages/RequestUser";
import { RequestsPage } from "../pages/RequestsPage";
import { ProductsPage } from "../pages/ProductsPage";
import { HistoricPage } from "../pages/HistoryPage";
import RequestDescriptionUser from "../pages/RequestDescriptionUser";
import User from "../pages/User";

export const Routes = () => {
  const { accessToken} = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/menu" component={Menu} isPrivate={accessToken ? true : false}></Route>
      <Route exact path="/cart" component={Cart} isPrivate></Route>
      <Route exact path="/request" component={RequestUser} isPrivate></Route>
      <Route path="/requestPage" component={RequestsPage}  isPrivate/>
      <Route path="/products" component={ProductsPage} isPrivate/>
      <Route path="/historic" component={HistoricPage} isPrivate/>
      <Route path="/detailsOwner" component={RequestDescriptionUser} isPrivate/>
      <Route path="/details/:id" component={User} isPrivate/>
      
    </Switch>
  )
}


