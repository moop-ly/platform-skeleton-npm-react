import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/productplan/";

const routes = [
  <Route path="/product-plans/create" element={<Create />} key="create" />,
  <Route path="/product-plans/edit/:id" element={<Update />} key="update" />,
  <Route path="/product-plans/show/:id" element={<Show />} key="show" />,
  <Route path="/product-plans" element={<List />} key="list" />,
  <Route path="/product-plans/:page" element={<List />} key="page" />,
];

export default routes;
