import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachmentdocument/";

const routes = [
  <Route
    path="/attachment-documents/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/attachment-documents/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/attachment-documents/show/:id" element={<Show />} key="show" />,
  <Route path="/attachment-documents" element={<List />} key="list" />,
  <Route path="/attachment-documents/:page" element={<List />} key="page" />,
];

export default routes;
