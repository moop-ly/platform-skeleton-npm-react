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
    return <Navigate to="/storages/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show Storage {item && item["@id"]}</h1>

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
              <th scope="row">mountId</th>
              <td>{item["mountId"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">s3Config</th>
              <td>
                <Links
                  items={{
                    href: `/storage-s3s/show/${encodeURIComponent(
                      item["s3Config"]
                    )}`,
                    name: item["s3Config"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">ftpConfig</th>
              <td>
                <Links
                  items={{
                    href: `/storage-ftp/show/${encodeURIComponent(
                      item["ftpConfig"]
                    )}`,
                    name: item["ftpConfig"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">ftpsConfig</th>
              <td>
                <Links
                  items={{
                    href: `/storage-ftps/show/${encodeURIComponent(
                      item["ftpsConfig"]
                    )}`,
                    name: item["ftpsConfig"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">localConfig</th>
              <td>
                <Links
                  items={{
                    href: `/storage-local/show/${encodeURIComponent(
                      item["localConfig"]
                    )}`,
                    name: item["localConfig"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">sourceFiles</th>
              <td>
                <Links
                  items={item["sourceFiles"].map((ref: any) => ({
                    href: `/source-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">documentTemplates</th>
              <td>
                <Links
                  items={item["documentTemplates"].map((ref: any) => ({
                    href: `/document-templates/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">documents</th>
              <td>
                <Links
                  items={item["documents"].map((ref: any) => ({
                    href: `/documents/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">documentFiles</th>
              <td>
                <Links
                  items={item["documentFiles"].map((ref: any) => ({
                    href: `/document-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">audio</th>
              <td>
                <Links
                  items={item["audio"].map((ref: any) => ({
                    href: `/audio/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">audioFiles</th>
              <td>
                <Links
                  items={item["audioFiles"].map((ref: any) => ({
                    href: `/audio-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">photos</th>
              <td>
                <Links
                  items={item["photos"].map((ref: any) => ({
                    href: `/photos/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">photoFiles</th>
              <td>
                <Links
                  items={item["photoFiles"].map((ref: any) => ({
                    href: `/photo-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
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
              <th scope="row">videoFiles</th>
              <td>
                <Links
                  items={item["videoFiles"].map((ref: any) => ({
                    href: `/video-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/storages/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/storages/edit/${encodeURIComponent(item["@id"])}`}>
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
