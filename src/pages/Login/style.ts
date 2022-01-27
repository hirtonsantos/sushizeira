import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  
  height: 100vh;
  /* @media (min-width: 1000px) { */
    /* flex-direction: column; */
    /* padding: 0px; */
  /* } */
  .styleHeader{
    
    padding: 20px 10px 0px 10px;
    
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100%; */
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
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 1000px) {
    margin-right: 40px;
    order: 1;
    display: block;
    max-width: 442px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 20px 19px 26px 19px;
  width: 100%;
  max-width: 442px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media (min-width: 1000px) {
    width: 442px;
  }
`;

export const Error = styled.ul`
  margin-top: 4px;
  text-align: start;
  margin-bottom: 15px;
  font-size: 11px;
  font-family: "Ubuntu", sans-serif;
  color: #f40000;
  padding: 0px 0px 0px 5px;
`;

export const ButtonSignIn = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 50px;
`;

export const ButtonSignUp = styled.button`
  margin-top: 20px;
  width: 100%;
  color: #ffffff;
  background: #000000;
  border: 0px;
`;
