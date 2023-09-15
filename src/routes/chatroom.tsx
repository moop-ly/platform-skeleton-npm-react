import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/chatroom/";

const routes = [
  <Route path="/chat-rooms/create" element={<Create />} key="create" />,
  <Route path="/chat-rooms/edit/:id" element={<Update />} key="update" />,
  <Route path="/chat-rooms/show/:id" element={<Show />} key="show" />,
  <Route path="/chat-rooms" element={<List />} key="list" />,
  <Route path="/chat-rooms/:page" element={<List />} key="page" />,
];

export default routes;
