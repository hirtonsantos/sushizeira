import styled from "styled-components";
// import { Box } from "../Registers/style";

export const Box = styled.div`
    align-items: center;
    display: flex;
    /* border-bottom: 2px solid; */
    border-right: 2px solid white;
    height: 33px;
    width: 100%;
    justify-content: center;
    /* color: white; */
    flex-direction: row;
    text-align: center;


    /* VERSAO MOBILE */
    /* border: none; */
`

export const Conteiner = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    display: flex;
    flex-direction: row;
`