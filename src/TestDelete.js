import * as React from "react";
import { useSearchParams, Link } from "react-router-dom";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];
const TestDelete = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (event) => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default TestDelete;
