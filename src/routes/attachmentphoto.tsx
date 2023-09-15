import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachmentphoto/";

const routes = [
  <Route path="/attachment-photos/create" element={<Create />} key="create" />,
  <Route
    path="/attachment-photos/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/attachment-photos/show/:id" element={<Show />} key="show" />,
  <Route path="/attachment-photos" element={<List />} key="list" />,
  <Route path="/attachment-photos/:page" element={<List />} key="page" />,
];

export default routes;
