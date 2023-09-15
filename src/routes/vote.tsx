import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/vote/";

const routes = [
  <Route path="/votes/create" element={<Create />} key="create" />,
  <Route path="/votes/edit/:id" element={<Update />} key="update" />,
  <Route path="/votes/show/:id" element={<Show />} key="show" />,
  <Route path="/votes" element={<List />} key="list" />,
  <Route path="/votes/:page" element={<List />} key="page" />,
];

export default routes;
