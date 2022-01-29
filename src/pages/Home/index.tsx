import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { api } from "../../services/api";
import { Container, Info, Header, Rating } from "./style";

export const Home = () => {
  const history = useHistory();
  const [rating, setRating] = useState([]);
  const handle = () => {
    api
      .get("/rating")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Header>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h3>Sushizeira</h3>
          </div>
          <Link to="/">Entrar</Link>
          <Link to="/signup">Cadastre-se</Link>
          <Link to="/menu">Cardápio</Link>
        </div>
        <Rating>
          <button className="left">
            <FaArrowLeft />
          </button>
          <div className="infoBox">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>
          <div className="infoBox__user">
            <span>nome do usuario</span>
            <span>Nota</span>
          </div>
          <button className="right">
            <FaArrowRight />
          </button>
        </Rating>
      </Header>

      <Info>
        <h4>Cansado e com fome de japa?</h4>
        <span className="right">
          Pede um <br /> sushizeira <br />
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
