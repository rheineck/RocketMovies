import { Link } from 'react-router-dom'

import { FiPlus } from "react-icons/fi"

import { Container, Content, Cards } from './styles'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

export function Home() {
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
                            <Link to='/details/:id'>
                                <Card />
                            </Link>
                            <Link to='/details/:id'>
                                <Card />
                            </Link>
                            <Link to='/details/:id'>
                                <Card />
                            </Link>
                        </Cards>
                    </div>
                </Content>
            </main>
        
        </Container>
    )
}