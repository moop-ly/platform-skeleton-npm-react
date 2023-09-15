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
    return <Navigate to="/audiotemplates/" replace />;
  }

  const delWithConfirm = () => {
    if (item && window.confirm("Are you sure you want to delete this item?")) {
      del(item);
    }
  };

  return (
    <div>
      <h1>Show AudioTemplate {item && item["@id"]}</h1>

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
              <th scope="row">type</th>
              <td>
                <Links
                  items={{
                    href: `/audio-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">parent</th>
              <td>
                <Links
                  items={{
                    href: `/audio-templates/show/${encodeURIComponent(
                      item["parent"]
                    )}`,
                    name: item["parent"],
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">subTemplates</th>
              <td>
                <Links
                  items={item["subTemplates"].map((emb: any) => ({
                    href: `/audio-templates/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
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
              <th scope="row">extension</th>
              <td>{item["extension"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">maxRate</th>
              <td>{item["maxRate"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">bufferSize</th>
              <td>{item["bufferSize"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">audioBitrate</th>
              <td>{item["audioBitrate"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">audioSampleRate</th>
              <td>{item["audioSampleRate"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">clipStart</th>
              <td>{item["clipStart"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">clipStop</th>
              <td>{item["clipStop"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">segmentLength</th>
              <td>{item["segmentLength"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">name</th>
              <td>{item["name"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">refName</th>
              <td>{item["refName"]}retrieved</td>
            </tr>
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
              <th scope="row">audioCodec</th>
              <td>{item["audioCodec"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">format</th>
              <td>{item["format"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">segmentType</th>
              <td>{item["segmentType"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtCreated</th>
              <td>{item["dtCreated"]}retrieved</td>
            </tr>
            <tr>
              <th scope="row">dtUpdated</th>
              <td>{item["dtUpdated"]}retrieved</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/audiotemplates/" className="btn btn-primary">
        Back to list
      </Link>
      {item && (
        <Link to={`/audiotemplates/edit/${encodeURIComponent(item["@id"])}`}>
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
