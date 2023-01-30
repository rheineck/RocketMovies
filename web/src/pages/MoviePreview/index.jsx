import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content } from './styles'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'

export function MoviePreview () {
    const { user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [data, setData] = useState(null)

    const params = useParams()

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        fetchNote()
    },[])

    return (
        <Container>
            <Header />

            {
                data &&
                <Content>
                    <header>
                        <Link to='/'>
                            <FiArrowLeft />
                            Voltar
                        </Link>
                    </header>

                    <div className="movieHeader">
                        <h1>{data.title}</h1>
                        <div className="stars">
                            <Stars />
                        </div>
                    </div>

                    <div className="info">
                        <img src={avatarUrl} alt={`Foto de ${user.name}`} />
                        <span>{`Por ${user.name}`}</span>
                        <FiClock />
                        <span>{data.created_at}</span>
                    </div>

                    {
                        data.tags &&
                        <div className="tags">
                            {
                                data.tags.map(tag =>(
                                <Tag 
                                    key={String(tag.id)}
                                    title={tag.name}
                                />))
                            }
                        </div>
                    }

                <p>
                    {data.description}
                </p>
                </Content>
            }
        </Container>
    )
}