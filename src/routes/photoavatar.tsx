import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/photoavatar/";

const routes = [
  <Route path="/photo-avatars/create" element={<Create />} key="create" />,
  <Route path="/photo-avatars/edit/:id" element={<Update />} key="update" />,
  <Route path="/photo-avatars/show/:id" element={<Show />} key="show" />,
  <Route path="/photo-avatars" element={<List />} key="list" />,
  <Route path="/photo-avatars/:page" element={<List />} key="page" />,
];

export default routes;
