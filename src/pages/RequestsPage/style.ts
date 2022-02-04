import styled from "styled-components";

interface SelectBoxProps {
    ison?: boolean;
    ishow?: boolean;
}

export const RequestConteiner = styled.div<SelectBoxProps>`
    display: ${(props) => (props.ishow ? "none" : "flex")};
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`

export const SelectBox = styled.div<SelectBoxProps>`
    width: 50px;
    height: 50px;
    background: white;
    display: ${(props) => (props.ison ?  "flex" : "none")};
`

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
    position: relative;
    h2 {
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        max-width: 12ch;  
    }
    @media(max-width: 514px){
        border: none;
        h2 {
            max-width: 9ch;    
        }
    }
    ${SelectBox}{
        position: absolute;
        width: 100%;
        height: 100%;
        color: black;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        li:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const BoxInfo = styled.div`
    display: flex;
    padding-bottom: 40px;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    @media(min-width: 933px){
        width: 80%;
        flex-direction: row;
    }
`

export const ContentSearch = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    label {
        display: none;
    }
    input{
      background: #4F5066;
      border-radius: 20px;
      border: 0px;
      height: 20px;
      padding: 5px;
      color: #fff;
    }
    svg {
        position: relative;
        width: 30px;
        color: gray;
        height: 18px;
        top: 2px;
    }
    @media(min-width: 933px){
        width: 30%;
        label{
            font-family: sans-serif;
            padding-bottom: 7px;
            display: initial;
        }
    }
`

export const ContentStatics = styled.div`
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    flex-wrap:wrap;
`

export const BoxStatics = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    flex-direction: column;
    justify-content: space-evenly;
    color: black;
    font-family: sans-serif;
    border-radius: 3px;
    background: white;
    border-radius: 3px;
    height: 50px;
    width: 80px;
    align-items: center;
    margin-bottom: 10px;
    padding: 6px;
    span{
        font-size: 15px;
    }
    @media(min-width: 933px){
        background: black;
        color: white;
        font-size: 23px;
        span {
            font-size: 23px;
            padding-top: 5px;
        }
    }
}
`

export const DataContent = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    display: flex;
    width: 80%;
    background: white;
    color: black;
    border-radius: 1px;
    font-weight: bold;
    @media(min-width: 933px){
        background: black;
        color: white;
    }
    @media(max-width: 933px){
        .none{
            display: none;
        }
    }
`

export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 80%;
    font-weight: bold;
    @media(min-width: 933px){
        margin: 0px;
    }
`

export const BoxConteiner = styled.div`
    ${Box}:nth-last-child(1) {
        border-right: none;
    } 
    cursor: pointer;
    display: flex;
    flex-direction: row;
    background: white;
    color: black;
    border-radius: 3px;
    margin-top: 5px;
    @media(min-width: 933px){
        margin: 0px;
        background: black;
        color: white;
    }
    @media(max-width: 933px){
        .none{
            display: none;
        }
            
    }
`
export const BoxNotRequest = styled.div<SelectBoxProps> `
    height: 90vh;
    display: ${(props) => (props.ishow ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
        color: blue;
        font-family: 'Rock Salt';
    }
`

export const Conteiner = styled.div<SelectBoxProps>`
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
        display: ${(props) => (props.ishow ? "none" : "flex")};
    }
`