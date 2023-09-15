import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/audiotemplate/";

const routes = [
  <Route path="/audio-templates/create" element={<Create />} key="create" />,
  <Route path="/audio-templates/edit/:id" element={<Update />} key="update" />,
  <Route path="/audio-templates/show/:id" element={<Show />} key="show" />,
  <Route path="/audio-templates" element={<List />} key="list" />,
  <Route path="/audio-templates/:page" element={<List />} key="page" />,
];

export default routes;
