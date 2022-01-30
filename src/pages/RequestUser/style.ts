import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Rock Salt', cursive;
  padding: 10px;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const Request = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    svg{
        width: 25px;
        height: 25px;
    }
    margin-bottom: 20px;
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
  justify-content: space-between;
`;

export const IconsH = styled.div`
  display: flex;
  align-items: center;
`;