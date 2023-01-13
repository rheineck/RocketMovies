import styled from "styled-components";

export const Container = styled.textarea`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    resize: none;
    border: none;
    border-radius: 10px;

    width: 100%;
    height: 200px;
    padding: 16px;
    margin-bottom: 8px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
`