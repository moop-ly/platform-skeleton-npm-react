import { Link, useParams } from "react-router-dom";
import Links from "../Links";
import Pagination from "../Pagination";
import { useRetrieve } from "../../hooks";
import { PagedCollection } from "../../interfaces/Collection";
import TResource from "./type";
import { TError } from "../../utils/types";

interface ListProps {
  retrieved: PagedCollection<TResource> | null;
  loading: boolean;
  error: TError;
}

const ListView = ({ error, loading, retrieved }: ListProps) => {
  const items = (retrieved && retrieved["hydra:member"]) || [];

  return (
    <div>
      <h1>VideoTemplate List</h1>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error.message}</div>}

      <p>
        <Link to="create" className="btn btn-primary">
          Create
        </Link>
      </p>

      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>type</th>
            <th>parent</th>
            <th>subTemplates</th>
            <th>storage</th>
            <th>width</th>
            <th>height</th>
            <th>videoBitrate</th>
            <th>maxRate</th>
            <th>bufferSize</th>
            <th>fps</th>
            <th>audioBitrate</th>
            <th>audioSampleRate</th>
            <th>preset</th>
            <th>tune</th>
            <th>profile</th>
            <th>level</th>
            <th>clipStart</th>
            <th>clipStop</th>
            <th>segmentLength</th>
            <th>name</th>
            <th>refName</th>
            <th>network</th>
            <th>videoThumbnailTemplates</th>
            <th>audioCodec</th>
            <th>videoCodec</th>
            <th>pixelFormat</th>
            <th>format</th>
            <th>segmentType</th>
            <th>extension</th>
            <th>dtCreated</th>
            <th>dtUpdated</th>
            <th colSpan={2} />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item["@id"]}>
              <th scope="row">
                <Links
                  items={{
                    href: `show/${encodeURIComponent(item["@id"])}`,
                    name: item["@id"],
                  }}
                />
              </th>
              <td>
                <Links
                  items={{
                    href: `/video-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/video-templates/show/${encodeURIComponent(
                      item["parent"]
                    )}`,
                    name: item["parent"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={item["subTemplates"].map((emb: any) => ({
                    href: `/video-templates/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
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
              <td>{item["width"]}</td>
              <td>{item["height"]}</td>
              <td>{item["videoBitrate"]}</td>
              <td>{item["maxRate"]}</td>
              <td>{item["bufferSize"]}</td>
              <td>{item["fps"]}</td>
              <td>{item["audioBitrate"]}</td>
              <td>{item["audioSampleRate"]}</td>
              <td>{item["preset"]}</td>
              <td>{item["tune"]}</td>
              <td>{item["profile"]}</td>
              <td>{item["level"]}</td>
              <td>{item["clipStart"]}</td>
              <td>{item["clipStop"]}</td>
              <td>{item["segmentLength"]}</td>
              <td>{item["name"]}</td>
              <td>{item["refName"]}</td>
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
              <td>
                <Links
                  items={item["videoThumbnailTemplates"].map((emb: any) => ({
                    href: `/video-thumbnail-templates/show/${encodeURIComponent(
                      emb["@id"]
                    )}`,
                    name: emb["@id"],
                  }))}
                />
              </td>
              <td>{item["audioCodec"]}</td>
              <td>{item["videoCodec"]}</td>
              <td>{item["pixelFormat"]}</td>
              <td>{item["format"]}</td>
              <td>{item["segmentType"]}</td>
              <td>{item["extension"]}</td>
              <td>{item["dtCreated"]}</td>
              <td>{item["dtUpdated"]}</td>
              <td>
                <Link
                  to={`/videotemplates/show/${encodeURIComponent(item["@id"])}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/videotemplates/edit/${encodeURIComponent(item["@id"])}`}
                >
                  <span className="fa fa-pencil" aria-hidden="true" />
                  <span className="sr-only">Edit</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination retrieved={retrieved} />
    </div>
  );
};

const List = () => {
  const { page } = useParams<{ page?: string }>();
  const id = (page && decodeURIComponent(page)) || "video-templates";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
