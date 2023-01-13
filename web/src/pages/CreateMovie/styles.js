import styled from "styled-components";

export const Container = styled.div`

    display: grid;

    grid-template-areas:
    "header"
    "content"
    ;

    header {
        padding: 0 124px;
        margin: 40px 0 24px 0;
        
    }

    header button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PURPLE};

        font-size: 16px;
    }
    
`

export const Form = styled.form`
    padding: 0 124px;

    h1 {
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 40px;
    }

    .info {
        display: flex;
        width: 100%;
        margin-bottom: 40px;
    }

    .movieTitle, .rating {
        width: 100%;
    }

    .movieTitle {
        margin-right: 20px;
    }

    .rating {
        margin-left: 20px;
    }

    .tags {
        display: flex;
        width: 100%;
        padding: 16px;

        background: ${({ theme }) => theme.COLORS.BLACK};
        border-radius: 8px;
    }

    footer {
        display: flex;        

        button:first-child {
            background: ${({ theme }) => theme.COLORS.BLACK};
            color: ${({ theme}) => theme.COLORS.PURPLE};
            margin-right: 40px;
        }
    }    
`