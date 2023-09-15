import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/relationship/";

const routes = [
  <Route path="/relationships/create" element={<Create />} key="create" />,
  <Route path="/relationships/edit/:id" element={<Update />} key="update" />,
  <Route path="/relationships/show/:id" element={<Show />} key="show" />,
  <Route path="/relationships" element={<List />} key="list" />,
  <Route path="/relationships/:page" element={<List />} key="page" />,
];

export default routes;
