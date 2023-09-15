import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/videotemplate/";

const routes = [
  <Route path="/video-templates/create" element={<Create />} key="create" />,
  <Route path="/video-templates/edit/:id" element={<Update />} key="update" />,
  <Route path="/video-templates/show/:id" element={<Show />} key="show" />,
  <Route path="/video-templates" element={<List />} key="list" />,
  <Route path="/video-templates/:page" element={<List />} key="page" />,
];

export default routes;
