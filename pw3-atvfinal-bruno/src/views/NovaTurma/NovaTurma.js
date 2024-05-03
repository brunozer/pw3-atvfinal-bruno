import React, { useEffect, useState } from "react";
import styles from "./Novolivro.module.css";
import Input from "../../Components/Form/Input.js";
import Select from "../../Components/Form/select.js";
import { useNavigate } from "react-router-dom";

export default function Novaturma() {
  const navigate = useNavigate();
  const [siglas, setSiglas] = useState([]);
  const [turmas, setTurmas] = useState({});

  useEffect(() => {
    fetchData();
  }, [siglas]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/sigla", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSiglas(data))
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChangeTurma(e) {
    setTurmas({ ...turmas, [e.target.name]: e.target.value });
  }

  function handleChangeSigla(e) {
    setTurmas({
      ...turmas,
      sigla: {
        id: e.target.value,
        sigla: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function createTurma(turma) {
    fetch("http://localhost:5000/turma", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(turma),
    })
      .then((res) => res.json())
      .then((data) => setTurmas(data), navigate("/turmas", { state: "teste" }))
      .catch((err) => {
        console.log(err);
      });
  }

  function submit(e) {
    e.preventDefault();
    createTurma(turmas);
  }

  return (
    <section className={styles.nova_turma_container}>
      <h1>nova turma</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="turma"
          id="turma"
          placeholder="digite o nome da turma"
          text="digite o nome da turma"
          handlerOnChange={handleChangeTurma}
        />
        <Select option={siglas} handlerOnChange={handleChangeSigla} />
        <input type="submit" value="cadastra turma" />
      </form>
    </section>
  );
}
