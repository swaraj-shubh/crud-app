import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ReadOneUser() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const data = await res.json();
    setUser(data);
  };

  return (
    <div className="space-y-4 mt-4">
      <Input
        placeholder="Enter user ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button className='bg-green-600 hover:bg-green-800' onClick={fetchUser}>Fetch User</Button>

      {user && user.name && (
        <div className="p-2 border rounded shadow-sm mt-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}
