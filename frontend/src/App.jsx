import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import { useState } from "react";
import axios from "axios";

import CreateUser from "./components/CreateUser";
import ReadAllUsers from "./components/ReadAllUsers";
import ReadOneUser from "./components/ReadOneUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {

  const [newUri, setNewUri] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleUpdateURI = async () => {
    try {
      const response = await axios.post("http://localhost:3000/update-mongo-uri", { newUri });
      setResponseMsg(response.data.message);
    } catch (error) {
      setResponseMsg("Failed to update Mongo URI");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">MongoDB CRUD App</h1>

      <div className="border mb-5 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Enter MongoDB URI</h2>
        <input
          type="text"
          placeholder="Enter new MongoDB URI"
          value={newUri}
          onChange={(e) => setNewUri(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        />
        <button
          onClick={handleUpdateURI}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update URI
        </button>
        {responseMsg && <p className="mt-2 text-sm">{responseMsg}</p>}
      </div>

      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="readall">Read All</TabsTrigger>
          <TabsTrigger value="readone">Read One</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
          <TabsTrigger value="delete">Delete</TabsTrigger>
        </TabsList>

        <TabsContent value="create"><CreateUser /></TabsContent>
        <TabsContent value="readall"><ReadAllUsers /></TabsContent>
        <TabsContent value="readone"><ReadOneUser /></TabsContent>
        <TabsContent value="update"><UpdateUser /></TabsContent>
        <TabsContent value="delete"><DeleteUser /></TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
