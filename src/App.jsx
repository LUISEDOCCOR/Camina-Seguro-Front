import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { HomePage, AuthPage, GroupsPage, CreateGroupPage } from "./pages";
//context
import { AuthContextProvider } from "@/context";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/home" element={<GroupsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/create" element={<CreateGroupPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
