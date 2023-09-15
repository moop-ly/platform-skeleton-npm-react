import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/documentfile/";

const routes = [
  <Route path="/document-files/create" element={<Create />} key="create" />,
  <Route path="/document-files/edit/:id" element={<Update />} key="update" />,
  <Route path="/document-files/show/:id" element={<Show />} key="show" />,
  <Route path="/document-files" element={<List />} key="list" />,
  <Route path="/document-files/:page" element={<List />} key="page" />,
];

export default routes;
