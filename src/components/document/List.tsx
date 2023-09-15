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
      <h1>Document List</h1>

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
            <th>site</th>
            <th>creator</th>
            <th>type</th>
            <th>categories</th>
            <th>states</th>
            <th>textVersions</th>
            <th>attachments</th>
            <th>storage</th>
            <th>coverPhotos</th>
            <th>saveSourceFile</th>
            <th>publish</th>
            <th>status</th>
            <th>dtCreated</th>
            <th>dtUpdated</th>
            <th>contentFlags</th>
            <th>networkPermissions</th>
            <th>groupPermissions</th>
            <th>userPermissions</th>
            <th>minViewingAge</th>
            <th>mediaFiles</th>
            <th>contentUrls</th>
            <th>embedUrl</th>
            <th>thumbnailUrl</th>
            <th>locale</th>
            <th>title</th>
            <th>description</th>
            <th>body</th>
            <th>activeTextVersions</th>
            <th>contentUrl</th>
            <th>size</th>
            <th>mimeType</th>
            <th>timeToEncode</th>
            <th>humanFileSize</th>
            <th>sourceFileUrl</th>
            <th>humanStatus</th>
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
              <td>
                <Links
                  items={{
                    href: `/sites/show/${encodeURIComponent(item["site"])}`,
                    name: item["site"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/users/show/${encodeURIComponent(item["creator"])}`,
                    name: item["creator"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/document-types/show/${encodeURIComponent(
                      item["type"]
                    )}`,
                    name: item["type"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={item["categories"].map((ref: any) => ({
                    href: `/categories/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["states"].map((ref: any) => ({
                    href: `/future-states/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["textVersions"].map((ref: any) => ({
                    href: `/text-versions/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["attachments"].map((ref: any) => ({
                    href: `/attachment-documents/show/${encodeURIComponent(
                      ref
                    )}`,
                    name: ref,
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
              <td>
                <Links
                  items={item["coverPhotos"].map((ref: any) => ({
                    href: `/photos/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>{item["saveSourceFile"]}</td>
              <td>{item["publish"]}</td>
              <td>{item["status"]}</td>
              <td>{item["dtCreated"]}</td>
              <td>{item["dtUpdated"]}</td>
              <td>{item["contentFlags"]}</td>
              <td>{item["networkPermissions"]}</td>
              <td>{item["groupPermissions"]}</td>
              <td>{item["userPermissions"]}</td>
              <td>{item["minViewingAge"]}</td>
              <td>
                <Links
                  items={item["mediaFiles"].map((ref: any) => ({
                    href: `/document-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>{item["contentUrls"]}</td>
              <td>{item["embedUrl"]}</td>
              <td>{item["thumbnailUrl"]}</td>
              <td>{item["locale"]}</td>
              <td>{item["title"]}</td>
              <td>{item["description"]}</td>
              <td>{item["body"]}</td>
              <td>{item["activeTextVersions"]}</td>
              <td>{item["contentUrl"]}</td>
              <td>{item["size"]}</td>
              <td>{item["mimeType"]}</td>
              <td>{item["timeToEncode"]}</td>
              <td>{item["humanFileSize"]}</td>
              <td>{item["sourceFileUrl"]}</td>
              <td>{item["humanStatus"]}</td>
              <td>
                <Link to={`/documents/show/${encodeURIComponent(item["@id"])}`}>
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link to={`/documents/edit/${encodeURIComponent(item["@id"])}`}>
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
  const id = (page && decodeURIComponent(page)) || "documents";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
