import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from "../Container/container";

export default function Navbar() {
  return (
    <>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"> HOME </Link>
          </li>
          <li className={styles.item}>
            <Link to="/turmas">Turmas</Link>
          </li>
          <li className={styles.item}>
            <Link to="/nova-turma">Cadastrar turma</Link>
          </li>
        </ul>
      </Container>
      <Outlet />
    </>
  );
}
