import { Link } from "react-router-dom";
import { Container } from "./style";

export const ModalHome = () => {
  return (
    <Container>
      <Link to="/">Entrar</Link>
      <Link to="/signup">Cadastre-se</Link>
      <Link to="/menu">Cardápio</Link>
    </Container>
  );
};
