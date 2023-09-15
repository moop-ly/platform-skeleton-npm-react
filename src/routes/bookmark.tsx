import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/bookmark/";

const routes = [
  <Route path="/bookmarks/create" element={<Create />} key="create" />,
  <Route path="/bookmarks/edit/:id" element={<Update />} key="update" />,
  <Route path="/bookmarks/show/:id" element={<Show />} key="show" />,
  <Route path="/bookmarks" element={<List />} key="list" />,
  <Route path="/bookmarks/:page" element={<List />} key="page" />,
];

export default routes;
