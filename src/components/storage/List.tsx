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
      <h1>Storage List</h1>

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
            <th>network</th>
            <th>mountId</th>
            <th>s3Config</th>
            <th>ftpConfig</th>
            <th>ftpsConfig</th>
            <th>localConfig</th>
            <th>sourceFiles</th>
            <th>documentTemplates</th>
            <th>documents</th>
            <th>documentFiles</th>
            <th>audio</th>
            <th>audioFiles</th>
            <th>photos</th>
            <th>photoFiles</th>
            <th>avatarFiles</th>
            <th>videoFiles</th>
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
                    href: `/networks/show/${encodeURIComponent(
                      item["network"]
                    )}`,
                    name: item["network"],
                  }}
                />
              </td>
              <td>{item["mountId"]}</td>
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
              <td>
                <Links
                  items={item["sourceFiles"].map((ref: any) => ({
                    href: `/source-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["documentTemplates"].map((ref: any) => ({
                    href: `/document-templates/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["documents"].map((ref: any) => ({
                    href: `/documents/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["documentFiles"].map((ref: any) => ({
                    href: `/document-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["audio"].map((ref: any) => ({
                    href: `/audio/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["audioFiles"].map((ref: any) => ({
                    href: `/audio-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["photos"].map((ref: any) => ({
                    href: `/photos/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["photoFiles"].map((ref: any) => ({
                    href: `/photo-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["avatarFiles"].map((ref: any) => ({
                    href: `/photo-avatars/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["videoFiles"].map((ref: any) => ({
                    href: `/video-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Link to={`/storages/show/${encodeURIComponent(item["@id"])}`}>
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link to={`/storages/edit/${encodeURIComponent(item["@id"])}`}>
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
  const id = (page && decodeURIComponent(page)) || "storage";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
