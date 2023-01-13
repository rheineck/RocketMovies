import styled from "styled-components";

export const Container = styled.div`
    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        font-size: 14px;
    }
`