import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/notification/";

const routes = [
  <Route path="/notifications/create" element={<Create />} key="create" />,
  <Route path="/notifications/edit/:id" element={<Update />} key="update" />,
  <Route path="/notifications/show/:id" element={<Show />} key="show" />,
  <Route path="/notifications" element={<List />} key="list" />,
  <Route path="/notifications/:page" element={<List />} key="page" />,
];

export default routes;
