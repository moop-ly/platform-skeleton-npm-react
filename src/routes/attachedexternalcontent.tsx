import { Route } from "react-router-dom";
import {
  List,
  Create,
  Update,
  Show,
} from "../components/attachedexternalcontent/";

const routes = [
  <Route
    path="/attached-external-contents/create"
    element={<Create />}
    key="create"
  />,
  <Route
    path="/attached-external-contents/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route
    path="/attached-external-contents/show/:id"
    element={<Show />}
    key="show"
  />,
  <Route path="/attached-external-contents" element={<List />} key="list" />,
  <Route
    path="/attached-external-contents/:page"
    element={<List />}
    key="page"
  />,
];

export default routes;
