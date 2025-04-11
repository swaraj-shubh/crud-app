import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    alert(data.message || "User Updated");
    setId("");
    setName("");
    setEmail("");
  };

  return (
    <div className="space-y-4 mt-4">
      <Input
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className='bg-green-600 hover:bg-green-800' onClick={handleUpdate}>Update User</Button>
    </div>
  );
}
