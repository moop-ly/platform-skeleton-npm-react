import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/documenttemplate/";

const routes = [
  <Route path="/document-templates/create" element={<Create />} key="create" />,
  <Route
    path="/document-templates/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/document-templates/show/:id" element={<Show />} key="show" />,
  <Route path="/document-templates" element={<List />} key="list" />,
  <Route path="/document-templates/:page" element={<List />} key="page" />,
];

export default routes;
