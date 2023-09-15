import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/audio/";

const routes = [
  <Route path="/audio/create" element={<Create />} key="create" />,
  <Route path="/audio/edit/:id" element={<Update />} key="update" />,
  <Route path="/audio/show/:id" element={<Show />} key="show" />,
  <Route path="/audio" element={<List />} key="list" />,
  <Route path="/audio/:page" element={<List />} key="page" />,
];

export default routes;
