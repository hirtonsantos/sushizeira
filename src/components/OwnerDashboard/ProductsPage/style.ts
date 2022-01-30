import styled from "styled-components";
// import { Box } from "../Registers/style";

export const Box = styled.div`
    align-items: center;
    display: flex;
    border-bottom: 2px solid;
    border-right: 2px solid;
    height: 33px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    @media(max-width: 514px){
        border: none;
    }
`

export const BoxConteiner = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    display: flex;
    flex-direction: row;
    background: white;
    color: black;
    border-radius: 3px;
    margin-top: 5px;
    @media(min-width: 514px){
        margin: 0px;
        background: black;
        color: white;
    }
`

export const DataContent = styled.div`
    display: flex;
    width: 80%;
    background: white;
    color: black;
    border-radius: 1px;
    font-weight: bold;
    @media(min-width: 514px){
        background: black;
        color: white;
    }
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
`

export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 80%;
    font-weight: bold;
    @media(min-width: 514px){
        margin: 0px;
        width: 80%;
    }
`

export const BoxContent = styled.div`
    width: 70%;
    h1 {
        text-align: center;
    }
    button:hover{
        cursor: pointer;
    }
`

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000000;
    color: white;
    position: relative;
    height: 100%;
    h1{
        font-family: 'Rock Salt';
        font-size: 25px;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    button {
        background: #2ACA2A;
        color: white;
        border-radius: 4px;
        border: 0px;
        font-weight: bold;
        width: 140px;
        height: 28px;
    }
`