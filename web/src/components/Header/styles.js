import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    
    height: 116px;
    width: 100%;
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    
    justify-content: space-between;
    
    padding: 0 125px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PURPLE};
        padding: 42px 0;
    }

    h2 {
        font-size: 14px;
        font-weight: 700;
    }

    > .search {
        padding: 30px 64px;
        width: 100%;
    }

    > .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
`

export const Profile = styled.a`

    display: flex;
    align-items: center;
    padding-left: 9px;

    a img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

`