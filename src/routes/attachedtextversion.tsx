import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachedtextversion/";

const routes = [
  <Route
    path="/attached-text-versions/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/attached-text-versions/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/attached-text-versions/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/attached-text-versions" element={<List />} key="list" />,
  <Route path="/attached-text-versions/:page" element={<List />} key="page" />,
];

export default routes;
