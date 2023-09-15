import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/futurestate/";

const routes = [
  <Route path="/future-states/create" element={<Create />} key="create" />,
  <Route path="/future-states/edit/:id" element={<Update />} key="update" />,
  <Route path="/future-states/show/:id" element={<Show />} key="show" />,
  <Route path="/future-states" element={<List />} key="list" />,
  <Route path="/future-states/:page" element={<List />} key="page" />,
];

export default routes;
