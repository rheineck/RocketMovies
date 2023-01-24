import { Container, Form, Background } from './styles' 
import { FiArrowLeft, FiLock, FiMail } from 'react-icons/fi'
import { RxPerson } from 'react-icons/rx'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUp () {

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Registre-se!</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={RxPerson}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button 
                    title="Crie Sua Conta"
                />

                <Link to='/'>
                    <FiArrowLeft size={20}/>
                    Voltar para o Login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}