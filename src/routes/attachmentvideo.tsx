import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachmentvideo/";

const routes = [
  <Route path="/attachment-videos/create" element={<Create />} key="create" />,
  <Route
    path="/attachment-videos/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/attachment-videos/show/:id" element={<Show />} key="show" />,
  <Route path="/attachment-videos" element={<List />} key="list" />,
  <Route path="/attachment-videos/:page" element={<List />} key="page" />,
];

export default routes;
