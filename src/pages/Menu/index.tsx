import { useState } from "react";
import CardProductMenu from "../../components/CardProductMenu";
import Header from "../../components/Header";
import PopupWarning from "../../components/PopupWarning";
import { useAuth } from "../../context/Auth/AuthContext";
import { useProduct } from "../../context/Product/ProductContext";
import { Container, Product, ProductCarousel, Title, UserContainer, ButtonsMenuOff, HeaderContainer, MyOrder, IconsH } from "./style";
import {GiShoppingCart} from "react-icons/gi";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link, useHistory } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useCart } from "../../context/Cart/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid red`,
    padding: '0 2px',
    background: "red",
    marginRight: "10px"
  },
}));


function Menu() {
    const {product} = useProduct()
    const {accessToken, user, signOut} = useAuth();
    const [popupWarning, setPopupWarning] = useState(false);
    const {cart} = useCart();
    const history = useHistory();

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
            <UserContainer>
              <MyOrder>
                    <span>Olá, {user.name}</span>
                    <Link to={"/request"}>Meus Pedidos</Link>
                </MyOrder>
             
                <IconsH>
                    <StyledBadge badgeContent={cart.length} color="secondary">
                        <GiShoppingCart onClick={() => history.push("/cart")}/>
                    </StyledBadge>
                    <FaSignOutAlt onClick={signOut}/>
                </IconsH>
            </UserContainer> 
            : 
            <ButtonsMenuOff>
              <button className="btn-login" onClick={() => history.push("/")}>Entrar</button>
              <button onClick={() => history.push("/signup")}>Cadastrar</button>
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
                    <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Temakis</div>
              <Product>
                {
                  product.filter((item) => item.category === "temaki").map((itemCard)=>(
                    <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Combinados</div>
              <Product>
                {
                  product.filter((item) => item.category === "combinados").map((itemCard)=>(
                    <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
            <ProductCarousel>
              <div>Bebidas</div>
              <Product>
                {
                  product.filter((item) => item.category === "bebida").map((itemCard)=>(
                    <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                  ))
                }
              </Product>
            </ProductCarousel>
        </div>
      </Container>
    );
  }

export default Menu;
