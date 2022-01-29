import styled, { keyframes } from "styled-components";
import bg from "../../assets/home_sushi.jpg";

const fadeIn = keyframes`
from{opacity:0;}
to{opacity:1;}
`;
const fadeOut = keyframes`
from{opacity:1;}
to{opacity:0;}
`;
const comeLeft = keyframes`
from{transform:translateX(1000px)}
to{transform:translateX(0)}
`;

const comeTop = keyframes`
from{transform:translateY(-500px)}
to{transform:translateY(0)}
`;

export const Container = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${bg});
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 150vh;
  height: 100vh;
  font-family: "Rock Salt";
  color: white;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: normal;
    background-image: url(${bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    width: 100vw;
    height: 100vh;
    font-family: "Rock Salt";
    color: white;
  }
`;
export const Header = styled.header`
  .logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-top: 10px;
  }
  a {
    display: none;
  }
  @media (min-width: 1000px) {
    display: flex;
    width: 100vw;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-around;
      align-self: flex-start;
      margin-top: 30px;
      margin-right: 10%;
      width: 100%;
    }
    .logo {
      margin-top: 0;
    }
    a {
      display: flex;
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      text-decoration: none;
      :hover {
        color: red;
      }
    }
    .header a:nth-of-type(1n) {
      animation: ${comeTop} 1s;
    }
    .header a:nth-of-type(2n) {
      animation: ${comeTop} 1.5s;
    }
    .header a:nth-of-type(3n) {
      animation: ${comeTop} 2s;
    }
  }
`;

export const Info = styled.div`
  height: 40vh;
  width: 50vw;
  background-color: rgba(0, 0, 0, 70%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-end;
  font-size: 16px;
  padding: 0 15px;
  margin: 0 50px 60px 0;
  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .desktop {
    display: none;
  }

  .contact {
    display: none;
  }
  @media (min-width: 1000px) {
    width: 25vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 70%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 26px;
    padding: 0 15px;
    margin: 0;
    animation: ${comeLeft} 1s;
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      animation: ${fadeIn} 2.5s;
    }
    .redLetter {
      color: red;
    }
    .right {
      align-self: flex-end;
      animation: ${fadeIn} 4.5s;
    }
    .contact {
      display: block;
      font-size: 15px;
      animation: ${fadeIn} 6.5s;
    }
    h3 {
      font-size: 30px;
      margin-bottom: 30px;
    }
    strong {
      font-weight: 700;
    }
    p {
      margin: 10px 0;
    }
  }
`;

export const Rating = styled.div`
  animation: ${fadeOut} 1s forwards;
  display: none;
  @media (min-width: 1000px) {
    animation: ${fadeIn} 1s;
    position: relative;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    width: 40%;
    height: 25%;
    border-radius: 20px;
    background: rgba(19, 20, 30, 95%);
    .infoBox {
      display: flex;
      justify-content: flex-start;
      align-self: flex-start;
      padding: 25px;
    }
    .infoBox__user {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 30px;
      align-self: flex-end;
    }
    button {
      background-color: red;
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      border: none;
    }
    .left {
      position: absolute;
      left: -20px;
    }
    .right {
      position: absolute;
      right: -20px;
    }
  }
`;
