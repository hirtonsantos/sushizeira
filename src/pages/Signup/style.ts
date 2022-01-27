import styled from "styled-components";
import ButtonComponent from "../../components/Button";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px 0px 0px 0px; */
  background: #000000;
  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 3px;
  font-size: 2.5rem;
  font-family: "Rock Salt", cursive;
  color: #ffffff;
`;

export const BackgroundImg = styled.img`
  width: 30rem;
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
  background: #000000;
  flex-direction: column;
  padding: 20px 19px 26px 19px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  @media (min-width: 800px) {
    /* width: 800px; */
    /* align-items: center */
  }
`;

export const Box1 = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;

    margin-bottom: 20px;

    justify-content: space-between;
    align-content: space-between;
    align-items: stretch;
  }
`;

export const Box1A = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    /* background: #760921; */
    /* width: 100%  ; */
    width: 370px;
  }
`;

export const Box2 = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    width: 100%;
  }
`;

export const Box2A = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    /* background: #760921; */
    /* width: 100%  ; */
    width: 370px;
  }
`;

export const Error = styled.ul`
  text-align: start;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: "Ubuntu", sans-serif;
  color: #f40000;
  padding: 5px 0px 0px 5px;
`;

export const ButtonSignUp = styled.div`
  width: 100%;
  height: 50px;
  @media (min-width: 800px) {
    margin-top: 20px;
    width: 50%;
  }
`;

export const ButtonSignIn = styled.button`
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
  height: 10px;
  color: #ffffff;
  background: #000000;
  border: 0px;
`;

export const ButtonStyled01 = styled(ButtonComponent)`
  font-size: 90px;
`;
