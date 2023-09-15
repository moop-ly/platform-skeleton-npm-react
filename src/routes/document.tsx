import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/document/";

const routes = [
  <Route path="/documents/create" element={<Create />} key="create" />,
  <Route path="/documents/edit/:id" element={<Update />} key="update" />,
  <Route path="/documents/show/:id" element={<Show />} key="show" />,
  <Route path="/documents" element={<List />} key="list" />,
  <Route path="/documents/:page" element={<List />} key="page" />,
];

export default routes;
