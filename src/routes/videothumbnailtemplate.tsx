import { Route } from "react-router-dom";
import {
  List,
  Create,
  Update,
  Show,
} from "../components/videothumbnailtemplate/";

const routes = [
  <Route
    path="/video-thumbnail-templates/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/video-thumbnail-templates/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/video-thumbnail-templates/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/video-thumbnail-templates" element={<List />} key="list" />,
  <Route
    path="/video-thumbnail-templates/:page"
    element={<List />}
    key="page"
  />,
];

export default routes;
