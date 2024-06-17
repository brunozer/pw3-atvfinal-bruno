import React, { useEffect, useState } from "react";
import "./Edicaoturma.module.css";
import Input from "../../Components/Form/Input.js";
import Select from "../../Components/Form/select.js";
import styles from "./Edicaoturma.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Editarturma() {
  const navigate = useNavigate();
  const [siglas, setSiglas] = useState([]);
  const [turma, setTurma] = useState({});

  const { id } = useParams();

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

  const fetchTurmas = async () => {
    await fetch(`http://localhost:5000/turma/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTurma(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    fetchTurmas();
  }, []);

  const editTurma = (turma) => {
    fetch(`http://localhost:5000/turma/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(turma),
    })
      .then((res) => res.json())
      .then((data) => {
        setTurma(data);
        navigate("/turmas", { state: "Turma editada com sucesso" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChangeTurma(e) {
    setTurma({ ...turma, [e.target.name]: e.target.value });
  }

  function handleChangeSigla(e) {
    setTurma({
      ...turma,
      sigla: {
        id: e.target.value,
        sigla: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function submit(e) {
    e.preventDefault();
    editTurma(turma);
  }

  return (
    <section className={styles.editar_turma_container}>
      <h1>editar turma</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="turma"
          id="turma"
          placeholder="digite o nome do turma"
          text="digite o nome do turma"
          handlerOnChange={handleChangeTurma}
          value={turma.turma}
        />
        <Select option={siglas} handlerOnChange={handleChangeSigla} />
        <input type="submit" value="editar turma" />
      </form>
    </section>
  );
}
