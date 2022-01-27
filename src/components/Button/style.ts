import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.color ? "#D5222C" : "88aa45"};
    color:  ${props => props.color ? "#FFFFFF" : "#00000"};
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 15px;
    border: 0px;
    margin: 0px 0px 0px 0px;
    cursor: pointer;
`;