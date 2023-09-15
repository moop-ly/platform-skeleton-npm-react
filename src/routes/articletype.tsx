import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/articletype/";

const routes = [
  <Route path="/article-types/create" element={<Create />} key="create" />,
  <Route path="/article-types/edit/:id" element={<Update />} key="update" />,
  <Route path="/article-types/show/:id" element={<Show />} key="show" />,
  <Route path="/article-types" element={<List />} key="list" />,
  <Route path="/article-types/:page" element={<List />} key="page" />,
];

export default routes;
