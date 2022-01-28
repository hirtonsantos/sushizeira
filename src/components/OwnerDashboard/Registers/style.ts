import styled from "styled-components";

export const Box = styled.div`
    align-items: center;
    display: flex;
    border-bottom: 2px solid;
    border-right: 2px solid;
    height: 33px;
    width: 100%;
    justify-content: center;
    /* color: white; */
    flex-direction: row;
    text-align: center;


    /* VERSAO MOBILE */
    border: none;
`

export const DataContent = styled.div`
    display: flex;
    width: 80%;
    /* VERSAO MOBILE */
    background: white;
    color: black;
    border-radius: 1px;
    font-weight: bold;
`

export const Container = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    background: #000000;
    color: white;
    font-weight: bold;
    /* width: 50%; */

    /* VERSAO MOBILE */
    width: 80%;
`
export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 80%;
    font-weight: bold;
`
