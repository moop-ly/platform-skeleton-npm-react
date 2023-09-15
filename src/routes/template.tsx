import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/template/";

const routes = [
  <Route path="/templates/create" element={<Create />} key="create" />,
  <Route path="/templates/edit/:id" element={<Update />} key="update" />,
  <Route path="/templates/show/:id" element={<Show />} key="show" />,
  <Route path="/templates" element={<List />} key="list" />,
  <Route path="/templates/:page" element={<List />} key="page" />,
];

export default routes;
