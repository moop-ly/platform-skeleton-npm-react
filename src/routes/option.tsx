import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/option/";

const routes = [
  <Route path="/options/create" element={<Create />} key="create" />,
  <Route path="/options/edit/:id" element={<Update />} key="update" />,
  <Route path="/options/show/:id" element={<Show />} key="show" />,
  <Route path="/options" element={<List />} key="list" />,
  <Route path="/options/:page" element={<List />} key="page" />,
];

export default routes;
