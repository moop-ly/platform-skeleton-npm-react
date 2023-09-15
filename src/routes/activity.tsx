import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/activity/";

const routes = [
  <Route path="/activities/create" element={<Create />} key="create" />,
  <Route path="/activities/edit/:id" element={<Update />} key="update" />,
  <Route path="/activities/show/:id" element={<Show />} key="show" />,
  <Route path="/activities" element={<List />} key="list" />,
  <Route path="/activities/:page" element={<List />} key="page" />,
];

export default routes;
