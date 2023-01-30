import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiPlus } from "react-icons/fi"
import { api } from '../../services/api'

import { Container, Content, Cards } from './styles'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

export function Home() {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    async function fetchNotes(response) {
        response = await api.get('/notes')
        setNotes(response.data)
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {fetchNotes(notes)},[])
   
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <div className="topInfo">
                        <h1>Meus Filmes</h1>
                        <Link to='/new'>
                            <Button
                                title=" Adicionar Filme"
                                icon={FiPlus}
                            />
                        </Link>
                    </div>

                    <div className="cards">
                        <Cards>
                            {
                                notes.map(({ title, description, rating, tags}) => (
                                    <Card
                                        key={String(note.id)}
                                        data={{
                                            title,
                                            description,
                                            rating,
                                            tags
                                        }}
                                        onClick={() => handleDetails(note.id)}
                                    />
                                ))
                            }
                        </Cards>
                    </div>
                </Content>
            </main>
        
        </Container>
    )
}