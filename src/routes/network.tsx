import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/network/";

const routes = [
  <Route path="/networks/create" element={<Create />} key="create" />,
  <Route path="/networks/edit/:id" element={<Update />} key="update" />,
  <Route path="/networks/show/:id" element={<Show />} key="show" />,
  <Route path="/networks" element={<List />} key="list" />,
  <Route path="/networks/:page" element={<List />} key="page" />,
];

export default routes;
