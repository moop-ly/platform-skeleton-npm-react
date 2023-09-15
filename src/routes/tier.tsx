import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/tier/";

const routes = [
  <Route path="/tiers/create" element={<Create />} key="create" />,
  <Route path="/tiers/edit/:id" element={<Update />} key="update" />,
  <Route path="/tiers/show/:id" element={<Show />} key="show" />,
  <Route path="/tiers" element={<List />} key="list" />,
  <Route path="/tiers/:page" element={<List />} key="page" />,
];

export default routes;
