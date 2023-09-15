import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/notificationsns/";

const routes = [
  <Route path="/notification-sns/create" element={<Create />} key="create" />,
  <Route path="/notification-sns/edit/:id" element={<Update />} key="update" />,
  <Route path="/notification-sns/show/:id" element={<Show />} key="show" />,
  <Route path="/notification-sns" element={<List />} key="list" />,
  <Route path="/notification-sns/:page" element={<List />} key="page" />,
];

export default routes;
