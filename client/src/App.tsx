import { Routes, Route } from "react-router-dom";
import Subscribe from "./pages/Subscribe";
import Unsubscribe from "./pages/Unsubscribe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/api/subscribe" element={<Subscribe />} />
        <Route path="/api/unsubscribe" element={<Unsubscribe />} />
      </Routes>
    </>
  );
}

export default App;
