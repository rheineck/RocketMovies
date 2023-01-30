import { useEffect, useState } from 'react'


import { Container } from './styles'

import { Tag } from '../Tag'
import { Stars } from '../Stars'
import { api } from '../../services/api'

export function Card({ data, ...rest }) {
    
    const [tags, setTags] = useState([])
    
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()

    },[])
    
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Stars 
                rating={data.rating}
            />

            <div className="text">
                <p>
                    {data.description}
                </p>
            </div>

            <div className="tags">
                {
                    data.tags && data.tags.map(tag => (
                        <Tag 
                            key={String(tag.id)}
                            title={tag.name}
                        />
                    ))
                }
            </div>    
        </Container>
    )
}