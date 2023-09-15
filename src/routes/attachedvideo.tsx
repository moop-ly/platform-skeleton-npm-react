import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachedvideo/";

const routes = [
  <Route
    path="/search/attached-videos/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/search/attached-videos/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/search/attached-videos/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/search/attached-videos" element={<List />} key="list" />,
  <Route path="/search/attached-videos/:page" element={<List />} key="page" />,
];

export default routes;
