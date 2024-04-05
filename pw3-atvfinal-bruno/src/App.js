import { useEffect, useState } from 'react'
import styles from './App.css'
import Input from './Components/Form/Input'
import Select from './Components/Form/select'
import Container from './Components/Container/container'
function App() {
  const [sigla, setSigla] = useState([])

    useEffect(() => {
        fetchDados()
    }, [sigla])
    const fetchDados = async () => {
        await fetch('http://localhost:5000/sigla', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setSigla(data))
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(sigla)
    return (
      <div className="App">
            <Container>
            <section className={styles.novaTurma_container}>
                <h1>Página de cadastro de Turma</h1>

                <form className={styles.form}>
                    <div>
                        <Input
                            type="text"
                            name="nome_turma"
                            id="nome_turma"
                            placeholder="digite o nome da turma"
                            text="digite o nome da turma"
                        />

                        <Select
                            name="sigla_id"
                            text="selecione a sigla"
                            options={sigla}
                        />
                        <input type="submit" value="cadastrar turma" />
                    </div>
                </form>
            </section>
            </Container>
      </div>
    )
}

export default App;
