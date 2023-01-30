import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'
import { TextArea } from '../../components/TextArea'

import { Container, Form } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function CreateMovie () {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(null)

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleDiscardMovie() {
        const userConfirmation = confirm(
            "Todas as alterações seão descartadas! Deseja continuar?"
        )

        if(userConfirmation) {
            navigate(-1)
        }
    }

    async function handleNewNote() {
        if(!title || !description || !rating) {
            return alert('Complete todos os campos!')
        }

        if(tags.length === 0) {
            return alert('Preencha pelo menos uma tag!')
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar!")
        }

        await api.post('/notes', {
            title,
            description,
            rating,
            tags
        })

        alert("Filme adicionado com sucesso!")
        navigate('/')
    }

    return(
        <Container>
            <Header />
            <header>
                <button type='button'>
                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar
                    </Link>
                </button>
            </header>

            <Form>
                <h1>Novo Filme</h1>

                <div className="info">

                    <div className="movieTitle">
                        <Input 
                            placeholder='Título'
                            type='text'
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="rating">
                        <Input 
                            placeholder='Sua nota (0 a 5)'
                            type='number'
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                </div>

                    <TextArea 
                        placeholder='Observações'
                        type='textarea'
                        onChange={e => setDescription(e.target.value)}
                    />

                <Section title='Marcadores'>

                    <div className="tags">
                        {
                            tags.map((tag, index) => (
                            <MovieItem
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />))
                        }

                        <MovieItem 
                            isNew
                            placeholder='Nova tag'
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>

                </Section>

                <footer>
                    <Button 
                        title='Excluir Filme'
                        onClick={handleDiscardMovie}
                    />
                    <Button 
                        title='Salvar Alterações'
                        onClick={handleNewNote}
                    />
                </footer>

            </Form>
        </Container>
    )
}