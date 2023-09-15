import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/videotype/";

const routes = [
  <Route path="/video-types/create" element={<Create />} key="create" />,
  <Route path="/video-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/video-types/show/:id" element={<Show />} key="show" />,
  <Route path="/video-types" element={<List />} key="list" />,
  <Route path="/video-types/:page" element={<List />} key="page" />,
];

export default routes;
