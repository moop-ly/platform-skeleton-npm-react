import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/audiofile/";

const routes = [
  <Route path="/audio-files/create" element={<Create />} key="create" />,
  <Route path="/audio-files/edit/:id" element={<Update />} key="update" />,
  <Route path="/audio-files/show/:id" element={<Show />} key="show" />,
  <Route path="/audio-files" element={<List />} key="list" />,
  <Route path="/audio-files/:page" element={<List />} key="page" />,
];

export default routes;
