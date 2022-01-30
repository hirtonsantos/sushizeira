import styled, { keyframes } from "styled-components";

const Pop = keyframes`
    0%{
        box-shadow: 0px 4px 51px 12px rgba(33, 125, 37, 0.20);
    }
    50%{
        box-shadow: 0px 4px 51px 12px rgba(33, 125, 37, 0.50);
    }
    100%{
        box-shadow: 0px 4px 51px 12px rgba(33, 125, 37, 1);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: 'Ubuntu';
    background: #13141E;
    padding: 15px 20px;
    width: 100%;
    border-radius: 30px;
    box-sizing: border-box;
`;




export const Status = styled.div`
    background: #4CDE18;
    width: 10px;
    height: 10px;
    animation: ${Pop} 1s infinite;
    border-radius: 100%;
    margin-left: 10px;
`;

export const OrderStatusPayment = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

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
