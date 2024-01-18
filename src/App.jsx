import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
