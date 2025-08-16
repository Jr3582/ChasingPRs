import { BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound"
import { Routes, Route } from "react-router-dom";
import { TDEEPage } from "./pages/TDEEPage";
import { MySplitsPage } from "./pages/MySplitsPage";

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tdee" element={<TDEEPage />} />
          <Route path="/splits" element={<MySplitsPage />} />
          <Route path="*" element={<NotFound />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
