import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ModalHome } from "../../components/ModalHome";
import { api } from "../../services/api";
import { Container, Info, Header, Rating } from "./style";

interface RatingInter {
  review: string;
  stars: number;
}

export const Home = () => {
  const [rating, setRating] = useState<RatingInter[]>([]);
  const [index, setIndex] = useState(0);
  const handle = () => {
    api
      .get("/rating")
      .then((response) => setRating(response.data))
      .catch((err) => console.log(err));
  };
  const nextReview = () => {
    setIndex(index + 1);
    console.log(index);
  };
  const previewReview = () => {
    setIndex(index - 1);
  };
  useEffect(() => {
    handle();
  }, [rating]);
  return (
    <Container>
      <ModalHome />
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
          <button onClick={() => previewReview} className="left">
            <FaArrowLeft />
          </button>
          <div className="infoBox">
            {/* <span>{rating[index].review}</span> */}
          </div>
          <div className="infoBox__user">
            <span>nome do usuario</span>
            {/* <span>{rating[index].stars}</span> */}
          </div>
          <button onClick={nextReview} className="right">
            <FaArrowRight />
          </button>
        </Rating>
      </Header>

      <Info>
        <div className="desktop">
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
        </div>

        <div className="mobile">
          <h4>Nós entregamos e fazemos você feliz</h4>
          <span>
            Cozinha coreana, japonesa, chinesa e europeia, todos os dias!
          </span>
        </div>
      </Info>
    </Container>
  );
};
