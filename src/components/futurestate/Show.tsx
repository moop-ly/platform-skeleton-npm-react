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
    return <Navigate to="/futurestates/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show FutureState {item && item["@id"]}</h1>

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
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtExecute</th>
              <td>{item["dtExecute"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">state</th>
              <td>{item["state"]}retrieved</td>
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
              <th scope="row">avatar</th>
              <td>
                <Links
                  items={{
                    href: `/photo-avatars/show/${encodeURIComponent(
                      item["avatar"]
                    )}`,
                    name: item["avatar"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">photoFile</th>
              <td>
                <Links
                  items={{
                    href: `/photo-files/show/${encodeURIComponent(
                      item["photoFile"]
                    )}`,
                    name: item["photoFile"],
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
              <th scope="row">relationship</th>
              <td>
                <Links
                  items={{
                    href: `/relationships/show/${encodeURIComponent(
                      item["relationship"]
                    )}`,
                    name: item["relationship"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">content</th>
              <td>{item["content"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/futurestates/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/futurestates/edit/${encodeURIComponent(item["@id"])}`}>
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
