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
                        <Button
                            title=" Adicionar Filme"
                            icon={FiPlus}
                        />
                    </div>

                    <div className="cards">
                        <Cards>
                            <Card />
                            <Card />
                            <Card />
                        </Cards>
                    </div>
                </Content>
            </main>
        
        </Container>
    )
}