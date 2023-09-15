import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/discussiontype/";

const routes = [
  <Route path="/discussion-types/create" element={<Create />} key="create" />,
  <Route path="/discussion-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/discussion-types/show/:id" element={<Show />} key="show" />,
  <Route path="/discussion-types" element={<List />} key="list" />,
  <Route path="/discussion-types/:page" element={<List />} key="page" />,
];

export default routes;
