import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/profilemeta/";

const routes = [
  <Route path="/profile-meta/create" element={<Create />} key="create" />,
  <Route path="/profile-meta/edit/:id" element={<Update />} key="update" />,
  <Route path="/profile-meta/show/:id" element={<Show />} key="show" />,
  <Route path="/profile-meta" element={<List />} key="list" />,
  <Route path="/profile-meta/:page" element={<List />} key="page" />,
];

export default routes;
