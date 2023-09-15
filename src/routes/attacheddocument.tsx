import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attacheddocument/";

const routes = [
  <Route
    path="/search/attached-documents/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/search/attached-documents/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/search/attached-documents/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/search/attached-documents" element={<List />} key="list" />,
  <Route
    path="/search/attached-documents/:page"
    element={<List />}
    key="page"
  />,
];

export default routes;
