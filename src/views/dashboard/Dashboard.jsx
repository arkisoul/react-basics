import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import LayoutComponent from "../layout/Layout";

import AdminHomeComponent from './admin/home/Home';
import PhysicianHomeComponent from './physician/home/Home';
import PatientHomeComponent from './patient/home/Home';
import ProductsComponent from './patient/products/Products'

const Dashboard = (props) => {
  const { path } = useRouteMatch();
  const menus = {
    patient: [
      { menu: "Dashboard", link: path },
      { menu: "Demography", link: `${path}/demography` },
      { menu: "Medications", link: `${path}/medications` },
      { menu: "Appointments", link: `${path}/appointments` },
      { menu: "Products", link: `${path}/products` },
    ],
    physician: [
      { menu: "Dashboard", link: path },
      { menu: "Appointments", link: `${path}/appointments` },
      { menu: "Profile", link: `${path}/profile` },
    ],
    admin: [
      { menu: "Dashboard", link: path },
      { menu: "Patients", link: `${path}/patients` },
      { menu: "Physicians", link: `${path}/physicians` },
    ],
  };
  return (
    <LayoutComponent menus={menus.patient}>
      <Switch>
        <Route exact path={path}>
          <h1>I am dashboard component</h1>
        </Route>
        <Route exact path={`${path}/admin`}>
          <AdminHomeComponent />
        </Route>
        <Route exact path={`${path}/patient`}>
          <PatientHomeComponent />
        </Route>
        <Route exact path={`${path}/physician`}>
          <PhysicianHomeComponent />
        </Route>
        <Route exact path={`${path}/products`}>
          <ProductsComponent />
        </Route>
        <Route exact path={`${path}/*`}>
          <Redirect to={path} />
        </Route>
      </Switch>
    </LayoutComponent>
  );
};

export default Dashboard;
