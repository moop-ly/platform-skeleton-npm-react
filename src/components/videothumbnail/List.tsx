import { Link, useParams } from "react-router-dom";
import Links from "../Links";
import Pagination from "../Pagination";
import { useRetrieve } from "../../hooks";
import { PagedCollection } from "../../interfaces/Collection";
import TResource from "./type";
import { TError } from "../../utils/types";

interface ListProps {
  retrieved: PagedCollection<TResource> | null;
  loading: boolean;
  error: TError;
}

const ListView = ({ error, loading, retrieved }: ListProps) => {
  const items = (retrieved && retrieved["hydra:member"]) || [];

  return (
    <div>
      <h1>VideoThumbnail List</h1>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error.message}</div>}

      <p>
        <Link to="create" className="btn btn-primary">
          Create
        </Link>
      </p>

      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>site</th>
            <th>media</th>
            <th>type</th>
            <th>minViewingAge</th>
            <th>status</th>
            <th>dtCreated</th>
            <th>dtUpdated</th>
            <th>contentFlags</th>
            <th>networkPermissions</th>
            <th>groupPermissions</th>
            <th>userPermissions</th>
            <th>network</th>
            <th>mediaFile</th>
            <th>template</th>
            <th>timestamp</th>
            <th>storage</th>
            <th>width</th>
            <th>height</th>
            <th>contentUrl</th>
            <th>size</th>
            <th>mimeType</th>
            <th>timeToEncode</th>
            <th>humanFileSize</th>
            <th>sourceFileUrl</th>
            <th>humanStatus</th>
            <th colSpan={2} />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item["@id"]}>
              <th scope="row">
                <Links
                  items={{
                    href: `show/${encodeURIComponent(item["@id"])}`,
                    name: item["@id"],
                  }}
                />
              </th>
              <td>
                <Links
                  items={{
                    href: `/sites/show/${encodeURIComponent(item["site"])}`,
                    name: item["site"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/videos/show/${encodeURIComponent(item["media"])}`,
                    name: item["media"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/video-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
              <td>{item["minViewingAge"]}</td>
              <td>{item["status"]}</td>
              <td>{item["dtCreated"]}</td>
              <td>{item["dtUpdated"]}</td>
              <td>{item["contentFlags"]}</td>
              <td>{item["networkPermissions"]}</td>
              <td>{item["groupPermissions"]}</td>
              <td>{item["userPermissions"]}</td>
              <td>
                <Links
                  items={{
                    href: `/networks/show/${encodeURIComponent(
                      item["network"]
                    )}`,
                    name: item["network"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/video-files/show/${encodeURIComponent(
                      item["mediaFile"]
                    )}`,
                    name: item["mediaFile"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/video-thumbnail-templates/show/${encodeURIComponent(
                      item["template"]
                    )}`,
                    name: item["template"],
                  }}
                />
              </td>
              <td>{item["timestamp"]}</td>
              <td>
                <Links
                  items={{
                    href: `/storage/show/${encodeURIComponent(
                      item["storage"]
                    )}`,
                    name: item["storage"],
                  }}
                />
              </td>
              <td>{item["width"]}</td>
              <td>{item["height"]}</td>
              <td>{item["contentUrl"]}</td>
              <td>{item["size"]}</td>
              <td>{item["mimeType"]}</td>
              <td>{item["timeToEncode"]}</td>
              <td>{item["humanFileSize"]}</td>
              <td>{item["sourceFileUrl"]}</td>
              <td>{item["humanStatus"]}</td>
              <td>
                <Link
                  to={`/videothumbnails/show/${encodeURIComponent(
                    item["@id"]
                  )}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/videothumbnails/edit/${encodeURIComponent(
                    item["@id"]
                  )}`}
                >
                  <span className="fa fa-pencil" aria-hidden="true" />
                  <span className="sr-only">Edit</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination retrieved={retrieved} />
    </div>
  );
};

const List = () => {
  const { page } = useParams<{ page?: string }>();
  const id = (page && decodeURIComponent(page)) || "video-thumbnails";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
