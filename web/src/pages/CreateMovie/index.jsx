import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'
import { TextArea } from '../../components/TextArea'

import { Container, Form } from './styles'

export function CreateMovie () {
    return(
        <Container>
            <Header />
            <header>
                <button type='button'>
                    <FiArrowLeft />
                    Voltar
                </button>
            </header>

            <Form>
                <h1>Novo Filme</h1>

                <div className="info">

                    <div className="movieTitle">
                        <Input 
                            placeholder='Título'
                            type='text'
                        />
                    </div>

                    <div className="rating">
                        <Input 
                            placeholder='Sua nota (0 a 5)'
                            type='number'
                        />
                    </div>
                </div>

                    <TextArea 
                        placeholder='Observações'
                        type='textarea'
                    />

                <Section title='Marcadores'>

                    <div className="tags">
                        <MovieItem 
                            placeholder='React'
                        />

                        <MovieItem 
                            isNew
                            placeholder='Nova tag'
                        />
                    </div>

                </Section>

                <footer>
                    <Button 
                        title='Excluir Filme'
                    />
                    <Button 
                        title='Salvar Alterações'
                    />
                </footer>

            </Form>
        </Container>
    )
}