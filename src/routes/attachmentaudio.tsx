import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/attachmentaudio/";

const routes = [
  <Route path="/attachment-audios/create" element={<Create />} key="create" />,
  <Route
    path="/attachment-audios/edit/:id"
    element={<Update />}
    key="update"
  />,
  <Route path="/attachment-audios/show/:id" element={<Show />} key="show" />,
  <Route path="/attachment-audios" element={<List />} key="list" />,
  <Route path="/attachment-audios/:page" element={<List />} key="page" />,
];

export default routes;
