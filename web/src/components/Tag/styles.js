import styled from "styled-components"

export const Container = styled.div`
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    padding: 5px 16px;
    margin-right: 6px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;
`