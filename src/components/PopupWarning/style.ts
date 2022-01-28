import styled, { keyframes } from "styled-components";

const Pop = keyframes`
0%{transform:scale(0)}
50%{transform:scale(1.5)}
100%{transform:scale(1)}
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
    span{
        color: black;
        margin-bottom 20px;
    }
`;

export const DivA = styled.div`
  position: fixed;
  background-color: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  padding: 20px;
  z-index: 10;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  width: 400px;
  min-width: 200px;
  animation: ${Pop} 1s;
  svg{
      color: #000;
      align-self: flex-end;
      margin: 10px 20px 0px 0px;
  }
`;

export const ButtonsMenuOff = styled.div`

    button{
        font-family: Rock Salt;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 10px;
        background: red;
        border: 0px;
        margin-right:20px;
        padding: 5px;
        color: #fff;
    }
    button:hover{
        background: #000;
        
    }
    .btn-login{
        background: transparent;
        color: #000;
    }
    .btn-login:hover{
        background: #000;
        color: #fff;
    }
`