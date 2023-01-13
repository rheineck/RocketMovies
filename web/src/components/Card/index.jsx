import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { Container } from './styles'

import { Tag } from '../Tag'

export function Card() {
    return (
        <Container>
            <h1>Meu Filme</h1>
            <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
            

            <div className="text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quod aperiam voluptatem nihil, doloremque tempora odio cum tempore totam saepe assumenda perspiciatis vero eveniet, molestiae molestias aut magnam quas natus!
                </p>
            </div>

            <div className="tags">
                <Tag 
                    title="Ficção Científica"
                />
                <Tag 
                    title="Drama"
                />
                <Tag 
                    title="Família"
                />
            </div>    
        </Container>
    )
}