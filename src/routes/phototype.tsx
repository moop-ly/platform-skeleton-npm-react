import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/phototype/";

const routes = [
  <Route path="/photo-types/create" element={<Create />} key="create" />,
  <Route path="/photo-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/photo-types/show/:id" element={<Show />} key="show" />,
  <Route path="/photo-types" element={<List />} key="list" />,
  <Route path="/photo-types/:page" element={<List />} key="page" />,
];

export default routes;
