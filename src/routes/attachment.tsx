import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachment/";

const routes = [
  <Route path="/attachments/create" element={<Create />} key="create" />,
  <Route path="/attachments/edit/:id" element={<Update />} key="update" />,
  <Route path="/attachments/show/:id" element={<Show />} key="show" />,
  <Route path="/attachments" element={<List />} key="list" />,
  <Route path="/attachments/:page" element={<List />} key="page" />,
];

export default routes;
