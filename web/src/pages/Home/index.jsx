import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiPlus, FiSearch } from "react-icons/fi"
import { api } from '../../services/api'

import { Container, Content, Cards } from './styles'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { EmptyPage } from '../../components/EmptyPage'
import { Input } from '../../components/Input'

export function Home() {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }

        fetchNotes()
    },[])
   
    return (
        <Container>
            <Header>
                <Input 
                    placeholder='Pesquise o título'
                    type='text'
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

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
                                notes.map(note => (
                                    <Card
                                        key={String(note.id)}
                                        data={note}
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