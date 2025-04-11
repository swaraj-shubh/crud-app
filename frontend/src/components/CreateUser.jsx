import React, { useState } from 'react';

// export default function CreateUser() {
//   const [jsonInput, setJsonInput] = useState('');
//   const [response, setResponse] = useState(null);

//   const handleCreateUser = async () => {
//     try {
//       const userData = JSON.parse(jsonInput);

//       const res = await fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await res.json();
//       setResponse(data);
//     } catch (error) {
//       setResponse({ error: error.message });
//     }
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-xl font-semibold">Create User</h2>

//       <textarea
//         rows={8}
//         className="w-full p-2 border rounded"
//         placeholder={`Paste your user JSON here...\nExample:\n{\n  "name": "Alice",\n  "email": "alice@example.com"\n}`}
//         value={jsonInput}
//         onChange={(e) => setJsonInput(e.target.value)}
//       />

//       <button
//         onClick={handleCreateUser}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Create
//       </button>

//       {response && (
//         <pre className="bg-gray-100 p-2 rounded mt-2">{JSON.stringify(response, null, 2)}</pre>
//       )}
//     </div>
//   );
// }




import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = async () => {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    alert(data.message || "User Created");
    setName("");
    setEmail("");
  };

  return (
    <div className="space-y-4 mt-4">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className='bg-green-600 hover:bg-green-800' onClick={handleCreate}>Create User</Button>
    </div>
  );
}