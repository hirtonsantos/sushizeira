import { Title, ContainerBody, CartBody, CardHeader, CardProducts, CartDetails, DetailsOrder, ContainerA } from "./style";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {Header} from "../../components/OwnerDashboardHeader";
import { useOwner } from "../../context/Owner/ownerContext";
import { ContainerDiv, Div, Container } from "../../components/CardProductCart/style";
import CardProductDetails from "../../components/CardProductDetails";

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
                            <CardProductDetails key={item.id} product={item} />  
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
                            src="data:image/png;base64,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"
                            alt="amazon foto"
                            />
                            <div>
                                <span>{requestUserId.user.name}</span>
                                <span className="userId" title={requestUserId.id}>{requestUserId.id}</span>
                            </div>
                        </section>
                    </header>

                    <span className="status"> Este pedido está {requestUserId.status} </span>
                    
                    <section className="othersInformations">
                    <span className="inf"> Outras infomações</span>
                    <span className="space">Email:  <span className="red">{requestUserId.user.email}</span></span>
                    <span className="space">Nome:  <span className="red">{requestUserId.user.name}</span></span>
                    <span className="space">Endereço: <span className="red">{requestUserId.user.address}</span></span>
                    <span className="space">Forma de pagamento: <span className="red">{requestUserId.payment}</span></span>
                    <span className="space">Total a pagar: <span className="red">{`R$ ${((valorTotalCarrinho).toFixed(2)).toString().replace(".", ",")}`}</span></span>
                    </section>

                </DetailsOrder>
            </CartDetails>
            }   
        </ContainerBody>
        </ContainerA>
    )
}

export default RequestDescriptionUser;