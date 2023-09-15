import { Link, Navigate, useParams } from "react-router-dom";

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
    return <Navigate to="/sourcefiles/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show SourceFile {item && item["@id"]}</h1>

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
      <Link to="/sourcefiles/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/sourcefiles/edit/${encodeURIComponent(item["@id"])}`}>
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
