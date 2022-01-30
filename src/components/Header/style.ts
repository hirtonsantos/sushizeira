import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 102px;

    }
    span{
        display: none;
        color: white;
        font-family: Rock Salt;
    }
    @media(min-width: 500px){
        span{
            display: block;
        }
    }
    &:hover{
        cursor: pointer;
    }
`;
