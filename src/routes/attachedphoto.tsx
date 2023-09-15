import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachedphoto/";

const routes = [
  <Route
    path="/search/attached-photos/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/search/attached-photos/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/search/attached-photos/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/search/attached-photos" element={<List />} key="list" />,
  <Route path="/search/attached-photos/:page" element={<List />} key="page" />,
];

export default routes;
