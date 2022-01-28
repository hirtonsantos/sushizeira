import { ProductsPage } from "../../components-testezin/OwnerDashboard/ProductsPage";
import { RequestsPage } from "../../components-testezin/OwnerDashboard/RequestsPage";
import { Route, Switch } from "react-router-dom";
import { HistoricPage } from "../../components-testezin/OwnerDashboard/HistoryPage";

export const OwnerDashboard = () => {
  return (
      <Switch>
        <Route exact path="/" component={RequestsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/historic" component={HistoricPage} />
      </Switch>
  );
};
