import { useEffect, useState } from "react";

export default function ReadAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="mt-4 space-y-2">
      {/* {users.map((user) => (
        <div key={user._id} className="p-2 border rounded shadow-sm">
          <p><strong>ID:</strong> {user._id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))} */}
      {users.map((user) => (
  <div key={user._id} className="p-2 border rounded shadow-sm bg-gray-50">
    {Object.entries(user).map(([key, value]) => (
      <p key={key}>
        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {String(value)}
      </p>
    ))}
  </div>
))}

    </div>
  );
}
