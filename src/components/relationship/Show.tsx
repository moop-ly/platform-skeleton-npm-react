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
    return <Navigate to="/relationships/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show Relationship {item && item["@id"]}</h1>

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
              <th scope="row">actor</th>
              <td>
                <Links
                  items={{
                    href: `/sites/show/${encodeURIComponent(item["actor"])}`,
                    name: item["actor"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">victim</th>
              <td>
                <Links
                  items={{
                    href: `/sites/show/${encodeURIComponent(item["victim"])}`,
                    name: item["victim"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">state</th>
              <td>{item["state"]}retrieved</td>
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
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtUpdated</th>
              <td>{item["dtUpdated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanState</th>
              <td>{item["humanState"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanDirection</th>
              <td>{item["humanDirection"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/relationships/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/relationships/edit/${encodeURIComponent(item["@id"])}`}>
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
