import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import { Route } from "./Route";
import { useAuth } from "../context/Auth/AuthContext";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import RequestUser from "../pages/RequestUser";
import { OwnerDashboard } from "../pages/OwnerDashboard";

/*import { PageNotFound } from "../pages/PageNotFound";
import { Dashboard } from "../pages/Dashboard";
import { Signup } from "../pages/Signup";
*/

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/menu" component={Menu} isPrivate={accessToken ? true : false}></Route>
      <Route exact path="/cart" component={Cart} isPrivate></Route>
      <Route exact path="/request" component={RequestUser} isPrivate></Route>
      <Route path="/dashboardOwner" component={OwnerDashboard} />
    </Switch>
  );
};

/*
<Route path="/signup" component={Signup} />
<Route component={PageNotFound} isPrivate={!!accessToken} />
*/