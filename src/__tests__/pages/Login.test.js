import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../../pages/Login";

describe("Login Page", () => {

  it('Should be able to render a title', () => {
    render(<Login />)
    const title = screen.getByText('Login')
    expect(title).toBeInTheDocument();
  })

  it("Should be able to render an input email", () => {
    render(<Login />);
    const emailField = screen.getByLabelText(/^Email/i);
    expect(emailField).toBeTruthy()
  });

  it("Should be able to render an input password", () => {
    render(<Login />);
    const passwordField = screen.getByLabelText(/^Senha/i);
    expect(passwordField).toBeTruthy();
  });
  
  it('Should be able to render a button', () => {
    render(<Login />)
    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();  
  })
  
})

