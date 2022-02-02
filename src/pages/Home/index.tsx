import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ModalHome } from "../../components/ModalHome";
import { useRequest } from "../../context/Request/RequestContext";
import { Container, Info, Header, Rating } from "./style";
import {AiTwotoneStar} from "react-icons/ai"


export const Home = () => {
  const {rating} = useRequest();
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((index+1) % rating.length);
  };
  const previewReview = () => {
    if(index === 0){
      setIndex(rating.length - 1)
    }else{
      setIndex(index - 1);
    }
  };
  

  return (
    <Container>
      <ModalHome />
      <Header>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h3>Sushizeira</h3>
          </div>
          <Link to="/login">Entrar</Link>
          <Link to="/signup">Cadastre-se</Link>
          <Link to="/menu">Cardápio</Link>
        </div>
        <Rating>
          <button onClick={previewReview} className="left">
            <FaArrowLeft />
          </button>
          <div className="infoBox">
            <span>{rating.length > 0 && rating[index].review}</span>
          </div>
          <div className="infoBox__user">
            <span>{(rating.length > 0 && rating[index].nameUser)}</span>
            <div className="starClient">
              <span>{rating.length > 0 && rating[index].stars}</span> 
              {rating.length > 0 && <AiTwotoneStar />}
            </div>
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
          <h4>Cansado e com fome de japa?</h4>
          <span>
            PEDE UM SUSHIZEIRA <span className="red">DELIVERY</span>
          </span>
        </div>
      </Info>
    </Container>
  );
};
