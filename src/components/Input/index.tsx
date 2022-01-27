// import { Container } from '@mui/material'
import { Container, ErrorMessageText } from "./styles";
import React, { InputHTMLAttributes, useState } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: any;
  getValue?: any;
  errors: FieldErrors<any>;
}

const Input = ({ name, register, getValue, errors, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    setIsFilled(!!getValue(name))
  };

  return (
    <Container isFocused={isFocused} isFilled={isFilled} hasErrors={!!errors && errors[name]}>
      <input
        name={name}
        ref={register}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      {errors && errors[name] && (
      <ErrorMessageText>{errors[name]?.message}</ErrorMessageText>

      )}  
    </Container>
  );
};

export default Input;
