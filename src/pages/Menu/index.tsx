import { useState } from "react";
import CardProductMenu from "../../components/CardProductMenu";
import Header from "../../components/Header";
import PopupWarning from "../../components/PopupWarning";
import { useAuth } from "../../context/Auth/AuthContext";
import { useProduct } from "../../context/Product/ProductContext";
import { Container, Product, ProductCarousel, Title, ButtonsMenuOff, HeaderContainer } from "./style";



function Menu() {
    const {product} = useProduct()
    const {accessToken, user} = useAuth();
    const [popupWarning, setPopupWarning] = useState(false);

    const activePopupWarning = () =>{
      setPopupWarning(!popupWarning)
    }

    return (
      <Container>
        {
          popupWarning &&
        <PopupWarning activePopupWarning={activePopupWarning}></PopupWarning>
        }
        <HeaderContainer>
          <Header></Header>
          {
            accessToken ? 
            <div></div> 
            : 
            <ButtonsMenuOff>
              <button className="btn-login">Entrar</button>
              <button>Cadastrar</button>
            </ButtonsMenuOff>
          }
        </HeaderContainer>
        <Title>
          <span>Cardápio</span>
        </Title>
        <div>
            <ProductCarousel>
              <div>Peças</div>
              <Product>
                {
                  product.filter((item) => item.category === "pecas").map((itemCard)=>(
                    <CardProductMenu activePopupWarning={activePopupWarning} img={itemCard.img} textTitle={itemCard.name} price={itemCard.price}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Temakis</div>
              <Product>
                {
                  product.filter((item) => item.category === "temaki").map((itemCard)=>(
                    <CardProductMenu activePopupWarning={activePopupWarning} img={itemCard.img} textTitle={itemCard.name} price={itemCard.price}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Combinados</div>
              <Product>
                {
                  product.filter((item) => item.category === "combinados").map((itemCard)=>(
                    <CardProductMenu activePopupWarning={activePopupWarning} img={itemCard.img} textTitle={itemCard.name} price={itemCard.price}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Bebidas</div>
              <Product>
                {
                  product.filter((item) => item.category === "bebida").map((itemCard)=>(
                    <CardProductMenu activePopupWarning={activePopupWarning} img={itemCard.img} textTitle={itemCard.name} price={itemCard.price}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
        </div>
      </Container>
    );
  }

export default Menu;
