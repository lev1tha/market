import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Authentication/>} />
    </Routes>
  );
}

export default App;
