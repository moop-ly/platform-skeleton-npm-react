import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/notificationtype/";

const routes = [
  <Route path="/notification-types/create" element={<Create />} key="create" />,
  <Route
    path="/notification-types/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/notification-types/show/:id" element={<Show />} key="show" />,
  <Route path="/notification-types" element={<List />} key="list" />,
  <Route path="/notification-types/:page" element={<List />} key="page" />,
];

export default routes;
