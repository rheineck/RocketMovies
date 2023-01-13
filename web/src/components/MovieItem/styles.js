import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_300}` : 'none'};

    border-radius: 10px;
    padding-right: 16px;
    margin-right: 24px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_350};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_350}
        }
    }
`