import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../../pages/Signup";

describe("Signup Page", () => {
  it("Should be able to render a title", () => {
    render(<Signup />);
    const title = screen.getByText("Cadastro");
    expect(title).toBeInTheDocument();
  });
  
  it("Should be able to render an input name", () => {
    render(<Signup />);
    const nameField = screen.getByLabelText(/^Nome/i);
    fireEvent.change(nameField, { target: { value: "Nome Teste de Cadastro" },});
    expect(nameField).toBeInTheDocument();
    expect(nameField).toHaveValue("Nome Teste de Cadastro");
  });

  it("Should be able to render an input email", () => {
    render(<Signup />);
    const emailField = screen.getByLabelText(/^Email/i);
    fireEvent.change(emailField, { target: { value: "cadteste@mail.com" } });
    expect(emailField).toBeInTheDocument()
    expect(emailField).toHaveValue("cadteste@mail.com");
  });

  it("Should be able to render an input address", () => {
    render(<Signup />);
    const addressField = screen.getByLabelText(/^Endereço/i);
    fireEvent.change(addressField, { target: { value: "Endereço Teste, 01" } });
    expect(addressField).toBeInTheDocument();
    expect(addressField).toHaveValue("Endereço Teste, 01");
  });

  it("Should be able to render an input password", () => {
    render(<Signup />);
    const passwordField = screen.getByLabelText(/^Senha/i);
    fireEvent.change(passwordField, { target: { value: "123456" } });
    expect(passwordField).toBeInTheDocument();
    expect(passwordField).toHaveValue("123456");
  });

  it("Should be able to render an input confirm password", () => {
    render(<Signup />);
    const confirmPasswordField = screen.getByLabelText(/^Confirme sua senha/i);
    fireEvent.change(confirmPasswordField, { target: { value: "123456" } });
    expect(confirmPasswordField).toBeInTheDocument();
    expect(confirmPasswordField).toHaveValue("123456");
  });

  it("Should be able to render a button", () => {
    render(<Signup />);
    const button = screen.getByText(/CADASTRAR/i);
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});