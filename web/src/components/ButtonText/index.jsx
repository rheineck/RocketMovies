import { Container } from "./styles"

export function ButtonText ({ title }) {
    return (
        <Container>
            <button>
                {title}
            </button>
        </Container>
    )
}