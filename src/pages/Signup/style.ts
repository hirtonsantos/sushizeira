import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #000000;
  .styleHeader {
    padding: 20px 10px 0px 10px;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  margin-bottom: 3px;
  font-size: 2.5rem;
  font-family: "Rock Salt", cursive;
  color: #ffffff;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  @media (min-width: 1000px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

export const FormBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  @media (min-width: 800px) {
    order: 1;
    display: flex;
    width: 800px;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 19px 26px 19px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  background: #000000;
  @media (min-width: 800px) {
  }
`;

export const Box1 = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items: stretch;
  }
`;

export const Box1A = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 370px;
  }
`;

export const Box2 = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: space-between;
    align-content: space-between;
    align-items: stretch;
  }
`;

export const Box2A = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 370px;
  }
`;

export const Error = styled.ul`
  padding: 5px 0px 0px 5px;
  margin-bottom: 15px;
  text-align: start;
  font-size: 12px;
  font-family: "Ubuntu", sans-serif;
  color: #f40000;
`;

export const ButtonSignUp = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 800px) {
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonSignUpSize = styled.div`
  height: 50px;
  @media (min-width: 800px) {
    width: 50%;
    justify-content: center;
  }
`;

export const ButtonSignIn = styled.button`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
  width: 100%;
  color: #ffffff;
  background: #000000;
  border: 0px;
  cursor: pointer;
`;
