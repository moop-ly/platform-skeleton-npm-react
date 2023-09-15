import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/like/";

const routes = [
  <Route path="/likes/create" element={<Create />} key="create" />,
  <Route path="/likes/edit/:id" element={<Update />} key="update" />,
  <Route path="/likes/show/:id" element={<Show />} key="show" />,
  <Route path="/likes" element={<List />} key="list" />,
  <Route path="/likes/:page" element={<List />} key="page" />,
];

export default routes;
