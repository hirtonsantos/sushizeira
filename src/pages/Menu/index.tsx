import { useState } from "react";
import CardProductMenu from "../../components/CardProductMenu";
import Header from "../../components/Header";
import PopupWarning from "../../components/PopupWarning";
import { useAuth } from "../../context/Auth/AuthContext";
import { useProduct } from "../../context/Product/ProductContext";
import { Container, Product, ProductCarousel, Title, UserContainer, ButtonsMenuOff, HeaderContainer, MyOrder, IconsH, Mobile, Desktop, TypesCategory, SearchItemCategory, Items } from "./style";
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

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
}


function Menu() {
    const {product} = useProduct()
    const {accessToken, user, signOut} = useAuth();
    const [popupWarning, setPopupWarning] = useState(false);
    const {cart} = useCart();
    const [productText, setProductText] = useState("pecas") 
    const history = useHistory();
    const [inputSearch, setInputSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    const activePopupWarning = () =>{
      setPopupWarning(!popupWarning)
    }

    function filtrarProducts(text:string) {
      setInputSearch(text)
      setFilteredProducts(product.filter((item) => {
          return ((item.name).toLowerCase().indexOf(text.toLowerCase()) > -1) && item.name
      }));
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
              <button className="btn-login" onClick={() => history.push("/login")}>Entrar</button>
              <button onClick={() => history.push("/signup")}>Cadastrar</button>
            </ButtonsMenuOff>
          }
        </HeaderContainer>
        <Title>
          <span>Cardápio</span>
        </Title>
        <Desktop>
            <div>
              <SearchItemCategory>
                  <span>Buscar: </span>
                  <input onChange={(evt) => filtrarProducts(evt.target.value)} value={inputSearch} type="text" />
              </SearchItemCategory>
              <TypesCategory>
                <span onClick={() => setProductText("pecas")} className={productText === "pecas" ? "colorName" : "noColorName"}>Peças</span>
                <span onClick={() => setProductText("temaki")} className={productText === "temaki" ? "colorName" : "noColorName"}>Temakis</span>
                <span onClick={() => setProductText("combinados")} className={productText === "combinados" ? "colorName" : "noColorName"}>Combinados</span>
                <span onClick={() => setProductText("bebida")} className={productText === "bebida" ? "colorName" : "noColorName"}>Bebidas</span>
              </TypesCategory>
            </div>
            <Items>
                {
                  filteredProducts.length > 0 ?
                    filteredProducts.filter((item) => item.category === productText).map((itemCard)=>(
                      <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                    ))
                  :
                    product.filter((item) => item.category === productText).map((itemCard)=>(
                      <CardProductMenu key={itemCard.id} activePopupWarning={activePopupWarning} product={itemCard}/> 
                    ))
                }
            </Items>
        </Desktop>


        <Mobile>
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
        </Mobile>
      </Container>
    );
  }

export default Menu;
