import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/chatmessage/";

const routes = [
  <Route path="/chat-messages/create" element={<Create />} key="create" />,
  <Route path="/chat-messages/edit/:id" element={<Update />} key="update" />,
  <Route path="/chat-messages/show/:id" element={<Show />} key="show" />,
  <Route path="/chat-messages" element={<List />} key="list" />,
  <Route path="/chat-messages/:page" element={<List />} key="page" />,
];

export default routes;
