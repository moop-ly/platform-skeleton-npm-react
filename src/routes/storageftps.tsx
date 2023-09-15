import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/storageftps/";

const routes = [
  <Route path="/storage-ftps/create" element={<Create />} key="create" />,
  <Route path="/storage-ftps/edit/:id" element={<Update />} key="update" />,
  <Route path="/storage-ftps/show/:id" element={<Show />} key="show" />,
  <Route path="/storage-ftps" element={<List />} key="list" />,
  <Route path="/storage-ftps/:page" element={<List />} key="page" />,
];

export default routes;
