import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/group/";

const routes = [
  <Route path="/groups/create" element={<Create />} key="create" />,
  <Route path="/groups/edit/:id" element={<Update />} key="update" />,
  <Route path="/groups/show/:id" element={<Show />} key="show" />,
  <Route path="/groups" element={<List />} key="list" />,
  <Route path="/groups/:page" element={<List />} key="page" />,
];

export default routes;
