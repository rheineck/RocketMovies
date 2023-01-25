import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { Container, Profile } from './styles'

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h1>RocketMovies</h1>
            <div className="search">
                <Input 
                    placeholder='Pesquise o título'
                    type='text'
                    icon={FiSearch}
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