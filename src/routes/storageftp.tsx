import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/storageftp/";

const routes = [
  <Route path="/storage-ftp/create" element={<Create />} key="create" />,
  <Route path="/storage-ftp/edit/:id" element={<Update />} key="update" />,
  <Route path="/storage-ftp/show/:id" element={<Show />} key="show" />,
  <Route path="/storage-ftp" element={<List />} key="list" />,
  <Route path="/storage-ftp/:page" element={<List />} key="page" />,
];

export default routes;
