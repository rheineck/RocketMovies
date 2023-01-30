import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.PURPLE_GRAY};
    font-family: 'Roboto Slab', serif;

    display: flex;
    align-items: center;

    height: 800px;
    width: auto;
`