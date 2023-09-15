import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/notificationchannel/";

const routes = [
  <Route
    path="/notification-channels/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/notification-channels/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/notification-channels/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/notification-channels" element={<List />} key="list" />,
  <Route path="/notification-channels/:page" element={<List />} key="page" />,
];

export default routes;
