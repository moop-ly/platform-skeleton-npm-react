import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/webhook/";

const routes = [
  <Route path="/webhooks/create" element={<Create />} key="create" />,
  <Route path="/webhooks/edit/:id" element={<Update />} key="update" />,
  <Route path="/webhooks/show/:id" element={<Show />} key="show" />,
  <Route path="/webhooks" element={<List />} key="list" />,
  <Route path="/webhooks/:page" element={<List />} key="page" />,
];

export default routes;
