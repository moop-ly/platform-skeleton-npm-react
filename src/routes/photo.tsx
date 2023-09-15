import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/photo/";

const routes = [
  <Route path="/photos/create" element={<Create />} key="create" />,
  <Route path="/photos/edit/:id" element={<Update />} key="update" />,
  <Route path="/photos/show/:id" element={<Show />} key="show" />,
  <Route path="/photos" element={<List />} key="list" />,
  <Route path="/photos/:page" element={<List />} key="page" />,
];

export default routes;
