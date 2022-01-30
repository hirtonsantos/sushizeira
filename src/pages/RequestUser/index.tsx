import { Link, useHistory } from "react-router-dom";
import {GiShoppingCart} from "react-icons/gi";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Container, HeaderContainer, IconsH, MyOrder, UserContainer, Request, CardHeader } from "./style";
import Header from "../../components/Header";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/Auth/AuthContext";
import { useCart } from "../../context/Cart/CartContext";
import { useRequest } from "../../context/Request/RequestContext";
import CardRequest from "../../components/CardRequest";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid red`,
    padding: '0 2px',
    background: "red",
    marginRight: "10px"
  },
}));

function RequestUser() {
    const {user, signOut} = useAuth();
    const {cart} = useCart();
    const {requestUser} = useRequest();
    const history = useHistory();

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
                            <StyledBadge badgeContent={cart.length} color="secondary">
                                <GiShoppingCart onClick={() => history.push("/cart")}/>
                            </StyledBadge>
                            <FaSignOutAlt onClick={signOut}/>
                        </IconsH>
                    </UserContainer> 
                
            </HeaderContainer>
            <Request>
                <CardHeader>
                    <span>Pedidos</span>
                </CardHeader>
                {
                    requestUser.map((item) => (
                        <CardRequest key={item.id} request={item} />
                    ))
                }
            </Request>
        </Container>
    )
}

export default RequestUser;