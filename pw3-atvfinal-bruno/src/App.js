import { useEffect, useState } from "react";
import styles from "./App.css";
import Input from "./Components/Form/Input";
import Select from "./Components/Form/select";
import Container from "./Components/Container/container";
function App() {
  const [sigla, setSigla] = useState([]);
  const [turma, setTurma] = useState({});
  useEffect(() => {
    fetchDados();
  }, [sigla]);
  const fetchDados = async () => {
    await fetch("http://localhost:5000/sigla", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSigla(data))
      .catch((error) => {
        console.log(error);
      });
  };
  function handlerChangeturma(e) {
    setTurma({ ...turma, [e.target.name]: e.target.value });
  }
  function handlerChangeSigla(e) {
    setTurma({
      ...turma,
      sigla: {
        id: e.target.value,
        sigla: e.target.options[e.target.selectedIndex].text,
      },
    });
  }
  const criarturma = async () => {
    await fetch("http://localhost:5000/turma", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(turma),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function formOnSubmit(e) {
    e.preventDefault();
    criarturma(turma);
  }
  return (
    <div className="App">
      <Container>
        <section className={styles.novaTurma_container}>
          <h1>Página de cadastro de Turma</h1>

          <form className={styles.form} onSubmit={formOnSubmit}>
            <div>
              <Input
                type="text"
                name="nome_turma"
                id="nome_turma"
                placeholder="digite o nome da turma"
                text="digite o nome da turma"
                handlerOnChange={handlerChangeturma}
              />

              <Select
                name="sigla_id"
                text="selecione a sigla"
                options={sigla}
                handlerOnChange={handlerChangeSigla}
              />
              <input type="submit" value="cadastrar turma" />
            </div>
          </form>
        </section>
      </Container>
    </div>
  );
}

export default App;
