import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/templatetype/";

const routes = [
  <Route path="/template-types/create" element={<Create />} key="create" />,
  <Route path="/template-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/template-types/show/:id" element={<Show />} key="show" />,
  <Route path="/template-types" element={<List />} key="list" />,
  <Route path="/template-types/:page" element={<List />} key="page" />,
];

export default routes;
