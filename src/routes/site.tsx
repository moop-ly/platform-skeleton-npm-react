import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/site/";

const routes = [
  <Route path="/sites/create" element={<Create />} key="create" />,
  <Route path="/sites/edit/:id" element={<Update />} key="update" />,
  <Route path="/sites/show/:id" element={<Show />} key="show" />,
  <Route path="/sites" element={<List />} key="list" />,
  <Route path="/sites/:page" element={<List />} key="page" />,
];

export default routes;
