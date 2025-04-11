import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import CreateUser from "./components/CreateUser";
import ReadAllUsers from "./components/ReadAllUsers";
import ReadOneUser from "./components/ReadOneUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">MongoDB CRUD App</h1>

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
