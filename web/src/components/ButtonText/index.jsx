import { Container } from "./styles"

export function ButtonText ({ title, ...rest }) {
    return (
        <Container {...rest}>
            <button>
                {title}
            </button>
        </Container>
    )
}