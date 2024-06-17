// Cardturma.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cardturma.module.css";

function Cardturma({ id, turma, sigla, handlerRemove }) {
  const remove = (e) => {
    handlerRemove(id);
  };
  return (
    <div className={styles.card}>
      <h4>{turma}</h4>
      <p>
        <span>sigla: </span>
        {sigla}
      </p>

      <div className={styles.book_card_actions}>
        <Link to={`/editar-turma/${id}`}>Editar</Link>
        <button onClick={remove}>Excluir</button>
      </div>
    </div>
  );
}

export default Cardturma;
