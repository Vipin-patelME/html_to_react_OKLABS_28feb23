import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import General from "./pages/General";
import Login from "./pages/Login";
import OtherPages from "./pages/OtherPages";
import Statics from "./pages/Statics";
import Tables from "./pages/Tables";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/general" element={<General />} />
          <Route path="/forms" element={<Forms />}/>
          <Route path="statics" element={<Statics  />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/others" element={<OtherPages />}/>
        </Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
