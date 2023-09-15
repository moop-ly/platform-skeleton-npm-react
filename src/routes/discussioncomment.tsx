import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/discussioncomment/";

const routes = [
  <Route
    path="/discussion-comments/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/discussion-comments/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/discussion-comments/show/:id" element={<Show />} key="show" />,
  <Route path="/discussion-comments" element={<List />} key="list" />,
  <Route path="/discussion-comments/:page" element={<List />} key="page" />,
];

export default routes;
