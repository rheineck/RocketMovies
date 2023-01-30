import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { Container, Profile } from './styles'

export function Header({ ...rest }) {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }
        
        fetchNotes()
    },[search])

    return (
        <Container {...rest}>
            <h1>RocketMovies</h1>
            <div className="search">
                <Input 
                    placeholder='Pesquise o título'
                    type='text'
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="profile">
                <h2>{user.name}</h2>
                <ButtonText 
                    title="Sair"
                    onClick={signOut}
                />
            </div>
            <Profile>
                <Link to='/profile'>
                    <img src={avatarUrl} alt={user.name} />
                </Link>
            </Profile>
        </Container>
    )
}