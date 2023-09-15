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
    return <Navigate to="/articles/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show Article {item && item["@id"]}</h1>

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
              <th scope="row">type</th>
              <td>
                <Links
                  items={{
                    href: `/article-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">attachment</th>
              <td>
                <Links
                  items={{
                    href: `/attachments/show/${encodeURIComponent(
                      item["attachment"]
                    )}`,
                    name: item["attachment"],
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
              <th scope="row">publish</th>
              <td>{item["publish"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">spamCheck</th>
              <td>{item["spamCheck"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">stripTags</th>
              <td>{item["stripTags"]}retrieved</td>
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
              <th scope="row">status</th>
              <td>{item["status"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">contentFlags</th>
              <td>{item["contentFlags"]}retrieved</td>
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
              <th scope="row">votePos</th>
              <td>{item["votePos"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">voteNeg</th>
              <td>{item["voteNeg"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">voteTotal</th>
              <td>{item["voteTotal"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">numViews</th>
              <td>{item["numViews"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanStatus</th>
              <td>{item["humanStatus"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">humanContentFlags</th>
              <td>{item["humanContentFlags"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">activeTextVersions</th>
              <td>{item["activeTextVersions"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/articles/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/articles/edit/${encodeURIComponent(item["@id"])}`}>
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
