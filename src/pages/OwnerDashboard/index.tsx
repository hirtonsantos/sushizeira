import { Route, Switch } from "react-router-dom";
import { HistoricPage } from "../../components/OwnerDashboard/HistoryPage";
import { ProductsPage } from "../../components/OwnerDashboard/ProductsPage";
import { RequestsPage } from "../../components/OwnerDashboard/RequestsPage";

export const OwnerDashboard = () => {
  return (
      <Switch>
        <Route exact path="/" component={RequestsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/historic" component={HistoricPage} />
      </Switch>
  );
};
