import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
        cursor: pointer;
    }
`