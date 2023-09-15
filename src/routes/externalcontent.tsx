import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/externalcontent/";

const routes = [
  <Route path="/external-contents/create" element={<Create />} key="create" />,
  <Route
    path="/external-contents/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/external-contents/show/:id" element={<Show />} key="show" />,
  <Route path="/external-contents" element={<List />} key="list" />,
  <Route path="/external-contents/:page" element={<List />} key="page" />,
];

export default routes;
