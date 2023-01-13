import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { Container, Profile } from './styles'

export function Header() {
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
                <h2>Admin</h2>
                <ButtonText 
                    title="Sair"
                />
            </div>
            <Profile>
                <Link to='/profile'>
                    <img src="https://github.com/rheineck.png" alt="Foto do Usuário" />
                </Link>
            </Profile>
        </Container>
    )
}