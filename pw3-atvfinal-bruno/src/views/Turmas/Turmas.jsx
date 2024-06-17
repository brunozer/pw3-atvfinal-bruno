import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Livros.module.css'
import Message from '../../Components/Message'
import Container from '../../Components/Container/container'
import CardTurma from '../../Components/Cardturma/Cardturma'

export default function Turmas() {
  const [turmas, setTurmas] = useState([])
    const [deleteMessage, setDeleteMessage] = useState('')

  useEffect(() => {
    fetchData()
  }, [turmas])

  const fetchData = async () => {
    await fetch('http://localhost:5000/turma', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setTurmas(data))
      .catch((err) => {
        console.log(err)
      })
  }

  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state
  }

  const removeTurma = async (id) => {
    await fetch(`http://localhost:5000/turma/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setDeleteMessage('Turma exculida com sucesso')
        })
        .catch((err) => {
            console.log(err)
        })
}


  return (
    <section className= {styles.turma_container}>
      <div className= {styles.turma_container_card}>
        <h3>Turmas</h3>
        {message && <Message msg={message} type="success" />}
        {deleteMessage && <Message msg={deleteMessage} type="error" />}
        <Container>
          {turmas.map((data) => (
            <CardTurma
              key={data.id}
              id={data.id}
              turma={data.turma}
              sigla={data.sigla.sigla}
              handlerRemove={removeTurma}
            />
          ))}
        </Container>
      </div>
    </section>
  )
}