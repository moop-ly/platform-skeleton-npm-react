import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/storage/";

const routes = [
  <Route path="/storage/create" element={<Create />} key="create" />,
  <Route path="/storage/edit/:id" element={<Update />} key="update" />,
  <Route path="/storage/show/:id" element={<Show />} key="show" />,
  <Route path="/storage" element={<List />} key="list" />,
  <Route path="/storage/:page" element={<List />} key="page" />,
];

export default routes;
