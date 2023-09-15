import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/textversion/";

const routes = [
  <Route path="/text-versions/create" element={<Create />} key="create" />,
  <Route path="/text-versions/edit/:id" element={<Update />} key="update" />,
  <Route path="/text-versions/show/:id" element={<Show />} key="show" />,
  <Route path="/text-versions" element={<List />} key="list" />,
  <Route path="/text-versions/:page" element={<List />} key="page" />,
];

export default routes;
