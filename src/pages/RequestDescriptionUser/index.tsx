import { Title, ContainerBody, CartBody, CardHeader, CardProducts, CartDetails, DetailsOrder, ContainerA } from "./style";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {Header} from "../../components/OwnerDashboardHeader";
import { useOwner } from "../../context/Owner/ownerContext";
import { ContainerDiv, Div, Container } from "../../components/CardProductCart/style";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid red`,
    padding: '0 2px',
    background: "red",
    marginRight: "10px"
  },
}));

interface Cart{
    id: string;
    name: string;
    category: string;
    price: number;
    img: string;
    description?: string;
    quantityStock: number;
    quantidade:number;
    userId: number;
  }

interface User {
    email: string;
    id: number;
    name: string;
    address: string;
    admin: boolean;
  }
  
  interface Orders{
    id: string;
    price: number;
    details: Cart[];
    user: User;
    status: string;
    payment: string;
  }

function RequestDescriptionUser() {

    const { requestUser } = useOwner()

    const requestUserId = requestUser[0]

    const valorTotalCarrinho = requestUserId.details.reduce(function (acumulador, valorAtual) {
        return acumulador + (valorAtual.quantidade*Number(valorAtual.price));
    }, 0);

    return(
        <ContainerA>

        <Header />
        
        <Title>
          <span> Descrição detalhada do pedido </span>
        </Title>
        <ContainerBody>
            <CartBody>
                <CardHeader>
                    <span>Produtos do pedido</span>
                </CardHeader>
                <CardProducts>
                   {
                       requestUserId.details.length > 0 ? 
                       requestUserId.details.map((item)=>(
                            <Container key={item.id}>
                            <img src={item.img} alt="" /> 
                            <ContainerDiv>
                              <span>{item.name}</span>
                              <Div>
                                  <span>{`R$ ${((item.price).toFixed(2)).toString().replace(".", ",")}`}</span>
                              </Div>
                            </ContainerDiv>
                          </Container>
                        ))
                        :
                        <span className="empty">Sem itens no carrinho</span>
                   }
                </CardProducts>
            </CartBody>
            
            {
                requestUserId.details.length > 0 &&
            <CartDetails>
                <DetailsOrder>
                    <span> Detalhes do pedido </span>
                    <header>
                        <section>
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VTcdzIfHrD1mnqlyyYKPHFSOvDM4YCOVIA&usqp=CAU"
                            alt="user foto"
                            />
                            <div>
                                <span>{requestUserId.user.name}</span>
                                <span>R$ {valorTotalCarrinho} Reais</span>
                            </div>
                        </section>
                        
                        <span className="userId" title={requestUserId.id}>
                            {requestUserId.id}
                        </span>
                    </header>

                    <span className="status"> Este pedido está {requestUserId.status} </span>
                    
                    <section className="othersInformations">
                    <span className="inf"> Outras infomações</span>
                    <span className="space">Email:  <span className="red">{requestUserId.user.email}</span></span>
                    <span className="space">Nome:  <span className="red">{requestUserId.user.name}</span></span>
                    <span className="space">Endereço: <span className="red">{requestUserId.user.address}</span></span>
                    </section>

                </DetailsOrder>
            </CartDetails>
            }   
        </ContainerBody>
        </ContainerA>
    )
}

export default RequestDescriptionUser;