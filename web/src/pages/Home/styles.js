import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    display: grid;

    grid-template-areas:
    'header'
    'content'
    ;

    .cards {
        grid-area: content;
        overflow-y: scroll;
    }
`

export const Content = styled.div`
    grid-area: content;

    margin-top: 50px;
    padding: 0 125px;

    .topInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
            width: 207px;
        }
    }

`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    gap: 24px;
`