import { FiUser, FiCamera, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile () {
    return (
        <Container>
            <header>
            <button type='button' >
                    <FiArrowLeft size={24}/>
                    Voltar
                </button>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src='https://github.com/rheineck.png'
                        alt='Foto do Usuário'
                    />

                    <label >
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                
                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input 
                    placeholder='Sobrenome'
                    type='text'
                    icon={FiUser}
                />

                <Input 
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input 
                    placeholder='Senha Atual'
                    type='password'
                    icon={FiLock}
                />

                <Input 
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                />

                <Button 
                    title='Salvar'
                />

            </Form>
        </Container>
    )
}