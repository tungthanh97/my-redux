import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Routers } from "./routes";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {Routers.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
