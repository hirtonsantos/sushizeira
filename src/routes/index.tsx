import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import { Route } from "./Route";
import { useAuth } from "../context/Auth/AuthContext";
import Signup from "../pages/Signup";
import { Home } from "../pages/Home";

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
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

/*
<Route path="/signup" component={Signup} />
<Route component={PageNotFound} isPrivate={!!accessToken} />
*/
