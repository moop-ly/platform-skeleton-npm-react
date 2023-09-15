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
      <h1>Activity List</h1>

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
            <th>user</th>
            <th>victim</th>
            <th>group</th>
            <th>dtCreated</th>
            <th>xref</th>
            <th>action</th>
            <th>discussion</th>
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
                    href: `/users/show/${encodeURIComponent(item["user"])}`,
                    name: item["user"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/users/show/${encodeURIComponent(item["victim"])}`,
                    name: item["victim"],
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
              <td>{item["dtCreated"]}</td>
              <td>{item["xref"]}</td>
              <td>{item["action"]}</td>
              <td>
                <Links
                  items={{
                    href: `/discussions/show/${encodeURIComponent(
                      item["discussion"]
                    )}`,
                    name: item["discussion"],
                  }}
                />
              </td>
              <td>
                <Link to={`/activitys/show/${encodeURIComponent(item["@id"])}`}>
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link to={`/activitys/edit/${encodeURIComponent(item["@id"])}`}>
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
  const id = (page && decodeURIComponent(page)) || "activities";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
