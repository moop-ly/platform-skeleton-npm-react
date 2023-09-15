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
      <h1>AttachmentVideo List</h1>

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
            <th>media</th>
            <th>textVersions</th>
            <th>order</th>
            <th>locale</th>
            <th>title</th>
            <th>description</th>
            <th>body</th>
            <th>contentUrl</th>
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
                    href: `/videos/show/${encodeURIComponent(item["media"])}`,
                    name: item["media"],
                  }}
                />
              </td>
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
              <td>{item["order"]}</td>
              <td>{item["locale"]}</td>
              <td>{item["title"]}</td>
              <td>{item["description"]}</td>
              <td>{item["body"]}</td>
              <td>{item["contentUrl"]}</td>
              <td>
                <Link
                  to={`/attachmentvideos/show/${encodeURIComponent(
                    item["@id"]
                  )}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/attachmentvideos/edit/${encodeURIComponent(
                    item["@id"]
                  )}`}
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
  const id = (page && decodeURIComponent(page)) || "attachment-videos";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
