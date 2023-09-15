import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/storagelocal/";

const routes = [
  <Route path="/storage-local/create" element={<Create />} key="create" />,
  <Route path="/storage-local/edit/:id" element={<Update />} key="update" />,
  <Route path="/storage-local/show/:id" element={<Show />} key="show" />,
  <Route path="/storage-local" element={<List />} key="list" />,
  <Route path="/storage-local/:page" element={<List />} key="page" />,
];

export default routes;
