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
    return <Navigate to="/attachmentdocuments/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show AttachmentDocument {item && item["@id"]}</h1>

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
              <th scope="row">media</th>
              <td>
                <Links
                  items={{
                    href: `/documents/show/${encodeURIComponent(
                      item["media"]
                    )}`,
                    name: item["media"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">textVersions</th>
              <td>
                <Links
                  items={item["textVersions"].map((ref: any) => ({
                    href: `/attached-text-versions/show/${encodeURIComponent(
                      ref
                    )}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">order</th>
              <td>{item["order"]}retrieved</td>
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
              <th scope="row">contentUrl</th>
              <td>{item["contentUrl"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/attachmentdocuments/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link
          to={`/attachmentdocuments/edit/${encodeURIComponent(item["@id"])}`}
        >
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
