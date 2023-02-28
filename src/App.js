import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./components/ui/Aside";
import Header from "./components/ui/Header";
import Layout from "./components/ui/Layout";
import MainHeader from "./components/ui/MainHeader";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
