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
    return <Navigate to="/photos/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show Photo {item && item["@id"]}</h1>

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
              <th scope="row">categories</th>
              <td>
                <Links
                  items={item["categories"].map((ref: any) => ({
                    href: `/categories/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
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
              <th scope="row">attachments</th>
              <td>
                <Links
                  items={item["attachments"].map((ref: any) => ({
                    href: `/attachment-photos/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">textVersions</th>
              <td>
                <Links
                  items={item["textVersions"].map((ref: any) => ({
                    href: `/text-versions/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">document</th>
              <td>
                <Links
                  items={{
                    href: `/documents/show/${encodeURIComponent(
                      item["document"]
                    )}`,
                    name: item["document"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">video</th>
              <td>
                <Links
                  items={{
                    href: `/videos/show/${encodeURIComponent(item["video"])}`,
                    name: item["video"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">audio</th>
              <td>
                <Links
                  items={{
                    href: `/audio/show/${encodeURIComponent(item["audio"])}`,
                    name: item["audio"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">saveSourceFile</th>
              <td>{item["saveSourceFile"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">file</th>
              <td>{item["file"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">publish</th>
              <td>{item["publish"]}retrieved</td>
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
              <th scope="row">avatarFiles</th>
              <td>
                <Links
                  items={item["avatarFiles"].map((ref: any) => ({
                    href: `/photo-avatars/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">mediaFiles</th>
              <td>
                <Links
                  items={item["mediaFiles"].map((ref: any) => ({
                    href: `/photo-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
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
              <th scope="row">contentUrls</th>
              <td>{item["contentUrls"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">embedUrl</th>
              <td>{item["embedUrl"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">thumbnailUrl</th>
              <td>{item["thumbnailUrl"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">locale</th>
              <td>{item["locale"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">title</th>
              <td>{item["title"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">description</th>
              <td>{item["description"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">body</th>
              <td>{item["body"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">activeTextVersions</th>
              <td>{item["activeTextVersions"]}retrieved</td>
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
      <Link to="/photos/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/photos/edit/${encodeURIComponent(item["@id"])}`}>
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
