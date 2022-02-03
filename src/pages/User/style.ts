import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Rock Salt', cursive;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
`

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  width: 100vw;
  margin: 3.3rem 0px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MyOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: red;
  }

  span {
    font-family: Rock Salt;
    font-style: normal;
    font-weight: normal;
  }
`

export const UserContainer = styled.div`
  svg {
    margin: 0px 10px;
    width: 30px;
    height: 30px;
    color: #fff;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const IconsH = styled.div`
  display: flex;
  align-items: center;
`


export const SubTitle = styled.span`
}`

export const OrderPrice = styled.span`
  font-family: Ubuntu;
  font-size: 14px;
  margin-top: 1.3rem;
}`


export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    background: #4cde18;
  }

  @media (min-width: 768px) {
    order: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    max-width:700px;
  }

  @media (min-width: 1100px) {
    button {
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 19px 26px 19px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  background: #000000;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`

export const ButtonReview = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: 768px) {
    margin-top: 10px;
    display: flex;
    width: 100%;
  }
`

export const ButtonReviewSize = styled.div`
  height: 2rem;
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    width: 40%;
  }
`

export const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  @media (min-width: 830px) {
    flex-flow: row nowrap;
  }
`

export const Confirm = styled.span`
  margin-left: 2rem;
  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-bottom: -1.3rem;
  }
`

export const BottomReview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
  }
`
export const RatingDiv = styled.div`
  margin: 1rem 0;
`

export const DetailsOrderTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

export const CardProducts = styled.div`
  display: flex;
  overflow-x:auto;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
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
    max-width: 400px;
    overflow:auto;
    flex-direction:column;
  }
  margin-bottom:20px;
`;