import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/usergroup/";

const routes = [
  <Route path="/user-groups/create" element={<Create />} key="create" />,
  <Route path="/user-groups/edit/:id" element={<Update />} key="update" />,
  <Route path="/user-groups/show/:id" element={<Show />} key="show" />,
  <Route path="/user-groups" element={<List />} key="list" />,
  <Route path="/user-groups/:page" element={<List />} key="page" />,
];

export default routes;
