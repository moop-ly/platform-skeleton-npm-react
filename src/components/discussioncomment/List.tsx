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
      <h1>DiscussionComment List</h1>

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
            <th>discussion</th>
            <th>parent</th>
            <th>pinned</th>
            <th>attachment</th>
            <th>states</th>
            <th>textVersions</th>
            <th>publish</th>
            <th>spamCheck</th>
            <th>stripTags</th>
            <th>networkPermissions</th>
            <th>groupPermissions</th>
            <th>userPermissions</th>
            <th>status</th>
            <th>contentFlags</th>
            <th>dtCreated</th>
            <th>dtUpdated</th>
            <th>network</th>
            <th>site</th>
            <th>children</th>
            <th>votePos</th>
            <th>voteNeg</th>
            <th>voteTotal</th>
            <th>humanStatus</th>
            <th>humanContentFlags</th>
            <th>activeTextVersions</th>
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
                    href: `/discussion-comments/show/${encodeURIComponent(
                      item["parent"]
                    )}`,
                    name: item["parent"],
                  }}
                />
              </td>
              <td>{item["pinned"]}</td>
              <td>
                <Links
                  items={{
                    href: `/attachments/show/${encodeURIComponent(
                      item["attachment"]
                    )}`,
                    name: item["attachment"],
                  }}
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
              <td>{item["publish"]}</td>
              <td>{item["spamCheck"]}</td>
              <td>{item["stripTags"]}</td>
              <td>{item["networkPermissions"]}</td>
              <td>{item["groupPermissions"]}</td>
              <td>{item["userPermissions"]}</td>
              <td>{item["status"]}</td>
              <td>{item["contentFlags"]}</td>
              <td>{item["dtCreated"]}</td>
              <td>{item["dtUpdated"]}</td>
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
                  items={item["children"].map((ref: any) => ({
                    href: `/discussion-comments/show/${encodeURIComponent(
                      ref
                    )}`,
                    name: ref,
                  }))}
                />
              </td>
              <td>{item["votePos"]}</td>
              <td>{item["voteNeg"]}</td>
              <td>{item["voteTotal"]}</td>
              <td>{item["humanStatus"]}</td>
              <td>{item["humanContentFlags"]}</td>
              <td>{item["activeTextVersions"]}</td>
              <td>
                <Link
                  to={`/discussioncomments/show/${encodeURIComponent(
                    item["@id"]
                  )}`}
                >
                  <span className="fa fa-search" aria-hidden="true" />
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link
                  to={`/discussioncomments/edit/${encodeURIComponent(
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
  const id = (page && decodeURIComponent(page)) || "discussion-comments";

  const { retrieved, loading, error } =
    useRetrieve<PagedCollection<TResource>>(id);

  return <ListView retrieved={retrieved} loading={loading} error={error} />;
};

export default List;
