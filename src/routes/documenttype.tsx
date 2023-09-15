import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/documenttype/";

const routes = [
  <Route path="/document-types/create" element={<Create />} key="create" />,
  <Route path="/document-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/document-types/show/:id" element={<Show />} key="show" />,
  <Route path="/document-types" element={<List />} key="list" />,
  <Route path="/document-types/:page" element={<List />} key="page" />,
];

export default routes;
