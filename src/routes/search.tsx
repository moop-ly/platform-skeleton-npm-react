import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/search/";

const routes = [
  <Route path="/searches/create" element={<Create />} key="create" />,
  <Route path="/searches/edit/:id" element={<Update />} key="update" />,
  <Route path="/searches/show/:id" element={<Show />} key="show" />,
  <Route path="/searches" element={<List />} key="list" />,
  <Route path="/searches/:page" element={<List />} key="page" />,
];

export default routes;
