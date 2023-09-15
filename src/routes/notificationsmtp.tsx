import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/notificationsmtp/";

const routes = [
  <Route path="/notification-smtps/create" element={<Create />} key="create" />,
  <Route
    path="/notification-smtps/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/notification-smtps/show/:id" element={<Show />} key="show" />,
  <Route path="/notification-smtps" element={<List />} key="list" />,
  <Route path="/notification-smtps/:page" element={<List />} key="page" />,
];

export default routes;
