import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/video/";

const routes = [
  <Route path="/videos/create" element={<Create />} key="create" />,
  <Route path="/videos/edit/:id" element={<Update />} key="update" />,
  <Route path="/videos/show/:id" element={<Show />} key="show" />,
  <Route path="/videos" element={<List />} key="list" />,
  <Route path="/videos/:page" element={<List />} key="page" />,
];

export default routes;
