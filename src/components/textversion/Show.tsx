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
    return <Navigate to="/textversions/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show TextVersion {item && item["@id"]}</h1>

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
              <th scope="row">article</th>
              <td>
                <Links
                  items={{
                    href: `/articles/show/${encodeURIComponent(
                      item["article"]
                    )}`,
                    name: item["article"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">discussion</th>
              <td>
                <Links
                  items={{
                    href: `/discussions/show/${encodeURIComponent(
                      item["discussion"]
                    )}`,
                    name: item["discussion"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">comment</th>
              <td>
                <Links
                  items={{
                    href: `/discussion-comments/show/${encodeURIComponent(
                      item["comment"]
                    )}`,
                    name: item["comment"],
                  }}
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
              <th scope="row">photo</th>
              <td>
                <Links
                  items={{
                    href: `/photos/show/${encodeURIComponent(item["photo"])}`,
                    name: item["photo"],
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
              <th scope="row">externalContent</th>
              <td>
                <Links
                  items={{
                    href: `/external-contents/show/${encodeURIComponent(
                      item["externalContent"]
                    )}`,
                    name: item["externalContent"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">hashTags</th>
              <td>
                <Links
                  items={item["hashTags"].map((ref: any) => ({
                    href: `/hash-tags/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">isDefault</th>
              <td>{item["isDefault"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">active</th>
              <td>{item["active"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
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
              <th scope="row">checkedForSpam</th>
              <td>{item["checkedForSpam"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">spamFound</th>
              <td>{item["spamFound"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">checkedForTriggerWords</th>
              <td>{item["checkedForTriggerWords"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">replacedTriggerWords</th>
              <td>{item["replacedTriggerWords"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">content</th>
              <td>{item["content"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/textversions/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/textversions/edit/${encodeURIComponent(item["@id"])}`}>
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
