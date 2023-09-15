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
    return <Navigate to="/externalcontents/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show ExternalContent {item && item["@id"]}</h1>

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
              <th scope="row">url</th>
              <td>{item["url"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">status</th>
              <td>{item["status"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">autoTldr</th>
              <td>{item["autoTldr"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">data</th>
              <td>{item["data"]}retrieved</td>
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
              <th scope="row">thumbnail</th>
              <td>{item["thumbnail"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">attachments</th>
              <td>
                <Links
                  items={item["attachments"].map((ref: any) => ({
                    href: `/attached-external-contents/show/${encodeURIComponent(
                      ref
                    )}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">activeTextVersions</th>
              <td>{item["activeTextVersions"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/externalcontents/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/externalcontents/edit/${encodeURIComponent(item["@id"])}`}>
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
