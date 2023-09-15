import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/videothumbnail/";

const routes = [
  <Route path="/video-thumbnails/create" element={<Create />} key="create" />,
  <Route path="/video-thumbnails/edit/:id" element={<Update />} key="update" />,
  <Route path="/video-thumbnails/show/:id" element={<Show />} key="show" />,
  <Route path="/video-thumbnails" element={<List />} key="list" />,
  <Route path="/video-thumbnails/:page" element={<List />} key="page" />,
];

export default routes;
