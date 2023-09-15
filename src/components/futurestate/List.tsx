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
      <h1>FutureState List</h1>

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
            <th>creator</th>
            <th>dtCreated</th>
            <th>dtExecute</th>
            <th>state</th>
            <th>site</th>
            <th>discussion</th>
            <th>article</th>
            <th>comment</th>
            <th>photo</th>
            <th>avatar</th>
            <th>photoFile</th>
            <th>document</th>
            <th>video</th>
            <th>audio</th>
            <th>relationship</th>
            <th>content</th>
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
                    href: `/users/show/${encodeURIComponent(item["creator"])}`,
                    name: item["creator"],
                  }}
                />
              </td>
              <td>{item["dtCreated"]}</td>
              <td>{item["dtExecute"]}</td>
              <td>{item["state"]}</td>
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
                    href: `/discussions/show/${encodeURIComponent(
                      item["discussion"]
                    )}`,
                    name: item["discussion"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/articles/show/${encodeURIComponent(
                      item["article"]
                    )}`,
                    name: item["article"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/discussion-comments/show/${encodeURIComponent(
                      item["comment"]
                    )}`,
                    name: item["comment"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/photos/show/${encodeURIComponent(item["photo"])}`,
                    name: item["photo"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/photo-avatars/show/${encodeURIComponent(
                      item["avatar"]
                    )}`,
                    name: item["avatar"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/photo-files/show/${encodeURIComponent(
                      item["photoFile"]
                    )}`,
                    name: item["photoFile"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/documents/show/${encodeURIComponent(
                      item["document"]
                    )}`,
                    name: item["document"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/videos/show/${encodeURIComponent(item["video"])}`,
                    name: item["video"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/audio/show/${encodeURIComponent(item["audio"])}`,
                    name: item["audio"],
                  }}
                />
              </td>
              <td>
                <Links
                  items={{
                    href: `/relationships/show/${encodeURIComponent(
                      item["relationship"]
                    )}`,
                    name: item["relationship"],
                  }}
                />
              </td>
              <td>{item["content"]}</td>
              <td>
                <Link
                  to={`/futurestates/show/${encodeURIComponent(item["@id"])}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/futurestates/edit/${encodeURIComponent(item["@id"])}`}
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
  const id = (page && decodeURIComponent(page)) || "future-states";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
