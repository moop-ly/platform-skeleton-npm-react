import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/videofile/";

const routes = [
  <Route path="/video-files/create" element={<Create />} key="create" />,
  <Route path="/video-files/edit/:id" element={<Update />} key="update" />,
  <Route path="/video-files/show/:id" element={<Show />} key="show" />,
  <Route path="/video-files" element={<List />} key="list" />,
  <Route path="/video-files/:page" element={<List />} key="page" />,
];

export default routes;
