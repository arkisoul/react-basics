import { Switch, Route, useRouteMatch } from "react-router-dom";
import LayoutComponent from "../layout/Layout";

const Dashboard = (props) => {
  const { path } = useRouteMatch();
  const menus = {
    patient: [
      { menu: "Dashboard", link: path },
      { menu: "Demography", link: `${path}/demography` },
      { menu: "Medications", link: `${path}/medications` },
      { menu: "Appointments", link: `${path}/appointments` },
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
        <Route exact path={`${path}/demography`}>
          <h1>I am demography component</h1>
        </Route>
        <Route exact path={`${path}/medications`}>
          <h1>I am medications component</h1>
        </Route>
        <Route exact path={`${path}/appointments`}>
          <h1>I am appointments component</h1>
        </Route>
      </Switch>
    </LayoutComponent>
  );
};

export default Dashboard;
