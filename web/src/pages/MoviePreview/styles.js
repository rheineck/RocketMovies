import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-areas:
    "header"
    "content"
    ;
`

export const Content = styled.div`
    grid-area: "content";

    padding: 40px 124px;
    
    > header, button {
        display: flex;
        align-items: center;
        font-size: 16px;

        gap: 8px;
        
        color: ${({ theme }) => theme.COLORS.PURPLE};
        border: none;
        background: none;
        
    }

    .movieHeader {
        padding-top: 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 24px;
    }

    .stars {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    .info {
        font-family: 'Roboto', serif;
        display: flex;
        align-items: center;
        padding: 24px 0;
        gap: 8px;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    .tags {
        display: flex;
        padding: 40px 0;
    }

    p {
        text-align: justify;
        line-height: 25px;
    }    
`