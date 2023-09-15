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
    return <Navigate to="/attachments/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show Attachment {item && item["@id"]}</h1>

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
              <th scope="row">documents</th>
              <td>
                <Links
                  items={item["documents"].map((emb: any) => ({
                    href: `/attachment-documents/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">photos</th>
              <td>
                <Links
                  items={item["photos"].map((emb: any) => ({
                    href: `/attachment-photos/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">audio</th>
              <td>
                <Links
                  items={item["audio"].map((emb: any) => ({
                    href: `/attachment-audios/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">videos</th>
              <td>
                <Links
                  items={item["videos"].map((emb: any) => ({
                    href: `/attachment-videos/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">externalContent</th>
              <td>
                <Links
                  items={item["externalContent"].map((emb: any) => ({
                    href: `/attached-external-contents/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/attachments/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/attachments/edit/${encodeURIComponent(item["@id"])}`}>
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
