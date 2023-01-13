import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.PURPLE_GRAY};
    
    padding: 32px;
    border-radius: 10px;

    h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    .stars {
        color: ${({ theme }) => theme.COLORS.PURPLE};
        margin-top: 8px;
    }

    p {
        font-family: 'Roboto', serif;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_350};
        font-size: 16px;
        margin-top: 15px;
        height: 54px;
    }

    .tags {
        margin-top: 15px;

        display: flex;
    }
`