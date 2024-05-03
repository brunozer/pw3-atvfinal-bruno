// Cardturma.js
import React from "react";
import styles from "./Cardturma.module.css";

function Cardturma({ turma, sigla }) {
  return (
    <div className={styles.card}>
      <h4>{turma}</h4>
      <p>
        <span>sigla: </span>
        {sigla}
      </p>
    </div>
  );
}

export default Cardturma;
