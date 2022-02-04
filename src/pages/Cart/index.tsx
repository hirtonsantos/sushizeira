import Header from "../../components/Header";
import { Container,HeaderContainer, UserContainer, IconsH, MyOrder, Title, ContainerBody, CartBody, CardHeader, CardProducts, CartDetails, DetailsOrder } from "./style";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useAuth } from "../../context/Auth/AuthContext";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../../context/Cart/CartContext";
import CardProductCart from "../../components/CardProductCart";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useRequest } from "../../context/Request/RequestContext";
import { useEffect, useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid red`,
    padding: '0 2px',
    background: "red",
    marginRight: "10px"
  },
}));

function Cart({}) {
    const {user, signOut} = useAuth();
    const {cart, deleteAll, getCart} = useCart();
    const {finishRequest} = useRequest();
    const [payment, setPayment] = useState("Dinheiro");
    const history = useHistory();
    const [refresh, setRefresh] = useState(false)

    const valorTotalCarrinho = cart.reduce(function (acumulador, valorAtual) {
        return acumulador + (valorAtual.quantidade*Number(valorAtual.price));
    }, 0);

    const myOrders = () =>{
        finishRequest(cart, valorTotalCarrinho, payment)
        deleteAll()
    }

    useEffect(()=>{
        getCart();
    }, [refresh])

    return(
        <Container>
        <HeaderContainer>
          <Header></Header>
            <UserContainer>
                <MyOrder>
                    <span>Olá, {user.name}</span>
                    <Link to={"/request"}>Meus Pedidos</Link>
                </MyOrder>
                <IconsH>
                    <StyledBadge badgeContent={cart.filter((item)=>Number(item.userId) == Number(user.id)).length} color="secondary">
                        <GiShoppingCart onClick={() => history.push("/cart")}/>
                    </StyledBadge>
                    <FaSignOutAlt onClick={signOut}/>
                </IconsH>
            </UserContainer> 
        </HeaderContainer>
        <Title>
          <span>Finalizar o pedido</span>
        </Title>
        <ContainerBody>
            <CartBody>
                <CardHeader>
                    <span>Carrinho</span>
                    <GiShoppingCart/>
                </CardHeader>
                <CardProducts>
                   {   cart &&
                       cart.length > 0 ? 
                        cart.map((itemCart)=>(
                            <CardProductCart key={itemCart.id} product={itemCart}/>
                        ))
                        :
                        <span className="empty">Sem itens no carrinho</span>
                   }
                </CardProducts>
            </CartBody>
            {
                cart.length > 0 &&
            <CartDetails>
                <CardHeader>
                    <span>Detalhes da compra:</span>
                </CardHeader>
                <DetailsOrder>
                    <span className="space">Nome:  <span className="red">{user.name}</span></span>
                    <span className="space">Total: <span className="red">{`R$ ${((valorTotalCarrinho).toFixed(2)).toString().replace(".", ",")}`}</span></span>
                    <span className="space">Endereço: <span className="red">{user.address}</span></span>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Forma de pagamento</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Dinheiro"
                            onChange={(evt) => setPayment(evt.target.value)}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
                            <FormControlLabel value="Cartão de crédito" control={<Radio />} label="Cartão de crédito" />
                            <FormControlLabel value="Cartão de débito" control={<Radio />} label="Cartão de débito" />
                        </RadioGroup>
                        <button onClick={myOrders}>Confirmar Pedido</button>
                    </FormControl>
                </DetailsOrder>
            </CartDetails>
            }   
        </ContainerBody>
        </Container>
    )
}

export default Cart;