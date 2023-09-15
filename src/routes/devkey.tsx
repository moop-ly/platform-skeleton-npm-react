import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/devkey/";

const routes = [
  <Route path="/devkeys/create" element={<Create />} key="create" />,
  <Route path="/devkeys/edit/:id" element={<Update />} key="update" />,
  <Route path="/devkeys/show/:id" element={<Show />} key="show" />,
  <Route path="/devkeys" element={<List />} key="list" />,
  <Route path="/devkeys/:page" element={<List />} key="page" />,
];

export default routes;
