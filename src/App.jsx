import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Sinlge";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="new" element={<New />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path="new" element={<New />} />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
