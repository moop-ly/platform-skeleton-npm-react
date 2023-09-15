import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/discussion/";

const routes = [
  <Route path="/discussions/create" element={<Create />} key="create" />,
  <Route path="/discussions/edit/:id" element={<Update />} key="update" />,
  <Route path="/discussions/show/:id" element={<Show />} key="show" />,
  <Route path="/discussions" element={<List />} key="list" />,
  <Route path="/discussions/:page" element={<List />} key="page" />,
];

export default routes;
