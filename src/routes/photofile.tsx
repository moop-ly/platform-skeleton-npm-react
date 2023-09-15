import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/photofile/";

const routes = [
  <Route path="/photo-files/create" element={<Create />} key="create" />,
  <Route path="/photo-files/edit/:id" element={<Update />} key="update" />,
  <Route path="/photo-files/show/:id" element={<Show />} key="show" />,
  <Route path="/photo-files" element={<List />} key="list" />,
  <Route path="/photo-files/:page" element={<List />} key="page" />,
];

export default routes;
