import styled from "styled-components";

export const ContainerA = styled.div`
    background-color: #000;
    color: #fff;
    font-family: 'Rock Salt', cursive;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    @media(max-width: 810px){
      flex-direction: column-reverse;
    }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const MyOrder = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-end;
  a{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top:10px;
    text-decoration:none;
    color: #fff;
  }
  a:hover{
    color: red;
  }
`;

export const UserContainer = styled.div`
  svg{
    margin: 0px 10px;
    width: 30px;
    height: 30px;
    color: #fff;
  }
  display: flex;
  flex-wrap: wrap;
`;

export const IconsH = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  text-align:center;
  font-size: 30px;
  margin: 10px 0px;
`;

export const ContainerBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: 30px;
    @media(min-width:830px){
      flex-direction:row;
      flex-wrap: wrap;
    }
`;

export const CartBody = styled.div`
    width: 100%;
    @media(min-width:830px){
      max-width:400px;
    }
`;

export const CartDetails = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 10px 0px 0px 0px;
`;

export const DetailsOrder = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 20px 0px 0px 0px;
    width: 100%;
    span, label{
      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: black;
    }
    .title{
      font-family: Rock Salt;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 20px;
    }
    .red{
      color: red;
    }
    .userId{
      word-break: break-all;
    }
    .space{
      margin-bottom:20px ;
    }
    button{
      background: #4CDE18;
      border-radius: 20px;
      padding: 10px;
      border: 0px;
    }
    header {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-direction: column;
      section{
        display: flex;
        align-items:center;
        width: 100%;
        img{
          user-select: auto;
          border-radius: 60px;
          width: 95px;
          height: 95px;
          object-fit:cover;
        }
        div{          
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          
        }
        margin-bottom: 20px;
    }
    .status{
        background: #b2e06b;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-bottom: 3px;
        width: 100%;
    }
    .othersInformations {
      border-top: 2px solid black;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
    }
    .inf{
        text-align: center;
        background: #f3f3f3;
        border: 2px solid #c3bdb5;
        margin-bottom: 10px;
      }
    @media(min-width: 830px){
      align-items: center;
      section div{
        flex-direction: row;
      }
    }
`;

export const CardHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    svg{
        width: 25px;
        height: 25px;
    }
`;

export const CardProducts = styled.div`
  display: flex;
  overflow-x:auto;
  .empty{
    margin-top:20px;
    padding: 4px;
    overflow: hidden;
  }
  &::-webkit-scrollbar {
    width: 12px;
    height: 9px;
  }
  &::-webkit-scrollbar-track {
    background: grey;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #04000586;
    border-radius: 20px;
  }
  @media(min-width:830px){
    max-height: 700px;
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction:column;
  }
`;