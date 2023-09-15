import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/hashtag/";

const routes = [
  <Route path="/hash-tags/create" element={<Create />} key="create" />,
  <Route path="/hash-tags/edit/:id" element={<Update />} key="update" />,
  <Route path="/hash-tags/show/:id" element={<Show />} key="show" />,
  <Route path="/hash-tags" element={<List />} key="list" />,
  <Route path="/hash-tags/:page" element={<List />} key="page" />,
];

export default routes;
