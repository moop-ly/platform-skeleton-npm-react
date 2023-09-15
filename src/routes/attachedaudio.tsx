import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachedaudio/";

const routes = [
  <Route
    path="/search/attached-audio/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/search/attached-audio/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/search/attached-audio/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/search/attached-audio" element={<List />} key="list" />,
  <Route path="/search/attached-audio/:page" element={<List />} key="page" />,
];

export default routes;
