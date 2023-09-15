import { Link, Navigate, useParams } from "react-router-dom";
import Links from "../Links";
import { useRetrieve, useDelete } from "../../hooks";
import TResource from "./type";
import { TError } from "../../utils/types";

interface ShowProps {
  retrieved: TResource | null;
  loading: boolean;
  error: TError;
  deleteError: TError;
  deleted: TResource | null;
  del: (item: TResource) => any;
}

const ShowView = ({
  del,
  deleteError,
  deleted,
  error,
  loading,
  retrieved: item,
}: ShowProps) => {
  if (deleted) {
    return <Navigate to="/photoavatars/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show PhotoAvatar {item && item["@id"]}</h1>

      {loading && (
        <div className="alert alert-info" role="status">
          Loading...
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
          {error.message}
        </div>
      )}
      {deleteError && (
        <div className="alert alert-danger" role="alert">
          <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
          {deleteError.message}
        </div>
      )}

      {item && (
        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">network</th>
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
            </tr>
            <tr>
              <th scope="row">states</th>
              <td>
                <Links
                  items={item["states"].map((ref: any) => ({
                    href: `/future-states/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">status</th>
              <td>{item["status"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtUpdated</th>
              <td>{item["dtUpdated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">contentFlags</th>
              <td>{item["contentFlags"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">networkPermissions</th>
              <td>{item["networkPermissions"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">groupPermissions</th>
              <td>{item["groupPermissions"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">userPermissions</th>
              <td>{item["userPermissions"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">minViewingAge</th>
              <td>{item["minViewingAge"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">site</th>
              <td>
                <Links
                  items={{
                    href: `/sites/show/${encodeURIComponent(item["site"])}`,
                    name: item["site"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">creator</th>
              <td>
                <Links
                  items={{
                    href: `/users/show/${encodeURIComponent(item["creator"])}`,
                    name: item["creator"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">group</th>
              <td>
                <Links
                  items={{
                    href: `/groups/show/${encodeURIComponent(item["group"])}`,
                    name: item["group"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">type</th>
              <td>
                <Links
                  items={{
                    href: `/photo-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">template</th>
              <td>
                <Links
                  items={{
                    href: `/photo-templates/show/${encodeURIComponent(
                      item["template"]
                    )}`,
                    name: item["template"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">media</th>
              <td>
                <Links
                  items={{
                    href: `/photos/show/${encodeURIComponent(item["media"])}`,
                    name: item["media"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">storage</th>
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
            </tr>
            <tr>
              <th scope="row">width</th>
              <td>{item["width"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">height</th>
              <td>{item["height"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">contentUrl</th>
              <td>{item["contentUrl"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">size</th>
              <td>{item["size"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">mimeType</th>
              <td>{item["mimeType"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">timeToEncode</th>
              <td>{item["timeToEncode"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanFileSize</th>
              <td>{item["humanFileSize"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">sourceFileUrl</th>
              <td>{item["sourceFileUrl"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanStatus</th>
              <td>{item["humanStatus"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/photoavatars/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/photoavatars/edit/${encodeURIComponent(item["@id"])}`}>
          <button className="btn btn-warning">Edit</button>
        </Link>
      )}
      <button onClick={delWithConfirm} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

const Show = () => {
  const { id } = useParams<{ id: string }>();
  const { retrieved, loading, error } = useRetrieve<TResource>(
    decodeURIComponent(id || "")
  );
  const { deleted, error: deleteError, del } = useDelete<TResource>();

  return (
    <ShowView
      retrieved={retrieved}
      loading={loading}
      error={error}
      deleteError={deleteError}
      deleted={deleted}
      del={del}
    />
  );
};

export default Show;
