import "./App.css";
import Home from "./views/Home/Home";
import Turmas from "./views/Turmas/Turmas";
import NovaTurma from "./views/NovaTurma/NovaTurma";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container/container";
import Editarturma from "./Components/edicaoTurma/Editarturma";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/turmas" element={<Turmas />} />
              <Route path="/nova-turma" element={<NovaTurma />} />
              <Route path="/editar-turma/:id" element={<Editarturma />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
