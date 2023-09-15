import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/product/";

const routes = [
  <Route path="/products/create" element={<Create />} key="create" />,
  <Route path="/products/edit/:id" element={<Update />} key="update" />,
  <Route path="/products/show/:id" element={<Show />} key="show" />,
  <Route path="/products" element={<List />} key="list" />,
  <Route path="/products/:page" element={<List />} key="page" />,
];

export default routes;
