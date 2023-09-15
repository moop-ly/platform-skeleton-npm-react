import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/audiotype/";

const routes = [
  <Route path="/audio-types/create" element={<Create />} key="create" />,
  <Route path="/audio-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/audio-types/show/:id" element={<Show />} key="show" />,
  <Route path="/audio-types" element={<List />} key="list" />,
  <Route path="/audio-types/:page" element={<List />} key="page" />,
];

export default routes;
