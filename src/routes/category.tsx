import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/category/";

const routes = [
  <Route path="/categories/create" element={<Create />} key="create" />,
  <Route path="/categories/edit/:id" element={<Update />} key="update" />,
  <Route path="/categories/show/:id" element={<Show />} key="show" />,
  <Route path="/categories" element={<List />} key="list" />,
  <Route path="/categories/:page" element={<List />} key="page" />,
];

export default routes;
