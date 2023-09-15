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
      <h1>Site List</h1>

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
            <th>privacyFlags</th>
            <th>networkPermissions</th>
            <th>groupPermissions</th>
            <th>userPermissions</th>
            <th>status</th>
            <th>displayName</th>
            <th>storage</th>
            <th>categories</th>
            <th>network</th>
            <th>group</th>
            <th>owner</th>
            <th>subdir</th>
            <th>timezone</th>
            <th>dtCreated</th>
            <th>tiers</th>
            <th>avatarUrls</th>
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
              <td>{item["privacyFlags"]}</td>
              <td>{item["networkPermissions"]}</td>
              <td>{item["groupPermissions"]}</td>
              <td>{item["userPermissions"]}</td>
              <td>{item["status"]}</td>
              <td>{item["displayName"]}</td>
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
                  items={item["categories"].map((ref: any) => ({
                    href: `/categories/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
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
                    href: `/groups/show/${encodeURIComponent(item["group"])}`,
                    name: item["group"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/users/show/${encodeURIComponent(item["owner"])}`,
                    name: item["owner"],
                  }}
                />
              </td>
              <td>{item["subdir"]}</td>
              <td>{item["timezone"]}</td>
              <td>{item["dtCreated"]}</td>
              <td>
                <Links
                  items={item["tiers"].map((ref: any) => ({
                    href: `/tiers/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>{item["avatarUrls"]}</td>
              <td>
                <Link to={`/sites/show/${encodeURIComponent(item["@id"])}`}>
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link to={`/sites/edit/${encodeURIComponent(item["@id"])}`}>
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
  const id = (page && decodeURIComponent(page)) || "sites";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
