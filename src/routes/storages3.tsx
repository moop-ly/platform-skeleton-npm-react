import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/storages3/";

const routes = [
  <Route path="/storage-s3s/create" element={<Create />} key="create" />,
  <Route path="/storage-s3s/edit/:id" element={<Update />} key="update" />,
  <Route path="/storage-s3s/show/:id" element={<Show />} key="show" />,
  <Route path="/storage-s3s" element={<List />} key="list" />,
  <Route path="/storage-s3s/:page" element={<List />} key="page" />,
];

export default routes;
