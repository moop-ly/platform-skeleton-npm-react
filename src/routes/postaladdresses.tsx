import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/postaladdresses/";

const routes = [
  <Route path="/postal-addresses/create" element={<Create />} key="create" />,
  <Route path="/postal-addresses/edit/:id" element={<Update />} key="update" />,
  <Route path="/postal-addresses/show/:id" element={<Show />} key="show" />,
  <Route path="/postal-addresses" element={<List />} key="list" />,
  <Route path="/postal-addresses/:page" element={<List />} key="page" />,
];

export default routes;
