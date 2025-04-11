import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function DeleteUser() {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message || "User Deleted");
    setId("");
  };

  return (
    <div className="space-y-4 mt-4">
      <Input
        placeholder="User ID to delete"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-800">
        Delete User
      </Button>
    </div>
  );
}

export default DeleteUser;
