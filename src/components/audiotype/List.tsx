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
      <h1>AudioType List</h1>

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
            <th>site</th>
            <th>name</th>
            <th>refName</th>
            <th>contentFlags</th>
            <th>status</th>
            <th>saveSourceFile</th>
            <th>publish</th>
            <th>storage</th>
            <th>network</th>
            <th>templates</th>
            <th>mediaObjects</th>
            <th>mediaFiles</th>
            <th>humanDefaultStatus</th>
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
                    href: `/sites/show/${encodeURIComponent(item["site"])}`,
                    name: item["site"],
                  }}
                />
              </td>
              <td>{item["name"]}</td>
              <td>{item["refName"]}</td>
              <td>{item["contentFlags"]}</td>
              <td>{item["status"]}</td>
              <td>{item["saveSourceFile"]}</td>
              <td>{item["publish"]}</td>
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
                  items={item["templates"].map((ref: any) => ({
                    href: `/audio-templates/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["mediaObjects"].map((ref: any) => ({
                    href: `/audio/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>
                <Links
                  items={item["mediaFiles"].map((ref: any) => ({
                    href: `/audio-files/show/${encodeURIComponent(ref)}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>{item["humanDefaultStatus"]}</td>
              <td>
                <Link
                  to={`/audiotypes/show/${encodeURIComponent(item["@id"])}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/audiotypes/edit/${encodeURIComponent(item["@id"])}`}
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
  const id = (page && decodeURIComponent(page)) || "audio-types";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
