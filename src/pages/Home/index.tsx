import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import bg from "../../assets/home_sushi.jpg";
import { Container, Info } from "./style";

export const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h3>Sushizeira</h3>
        </div>
        <Link to="/">Entrar</Link>
        <Link to="/signin">Cadastre-se</Link>
        <Link to="">Cardápio</Link>
      </header>
      <Info>
        <h4>Cansado e com fome de japa?</h4>
        <span className="right">
          Pede um <br /> sushizeira <br />{" "}
          <span className="redLetter">delivery</span>
        </span>

        <div className="contact">
          <h3>Contato</h3>
          <p>
            <strong>Telefone</strong>: 8 800 800 80 80
          </p>
          <p>
            <strong>E-mail</strong>: hello@gmail.com
          </p>
          <p>
            <strong>Morada</strong>: st.Kosygina, 15
          </p>
        </div>
      </Info>
    </Container>
  );
};
