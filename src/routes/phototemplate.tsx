import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/phototemplate/";

const routes = [
  <Route path="/photo-templates/create" element={<Create />} key="create" />,
  <Route path="/photo-templates/edit/:id" element={<Update />} key="update" />,
  <Route path="/photo-templates/show/:id" element={<Show />} key="show" />,
  <Route path="/photo-templates" element={<List />} key="list" />,
  <Route path="/photo-templates/:page" element={<List />} key="page" />,
];

export default routes;
