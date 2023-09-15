import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/sourcefile/";

const routes = [
  <Route path="/source-files/create" element={<Create />} key="create" />,
  <Route path="/source-files/edit/:id" element={<Update />} key="update" />,
  <Route path="/source-files/show/:id" element={<Show />} key="show" />,
  <Route path="/source-files" element={<List />} key="list" />,
  <Route path="/source-files/:page" element={<List />} key="page" />,
];

export default routes;
