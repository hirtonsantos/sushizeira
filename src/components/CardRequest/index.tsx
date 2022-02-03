import { Container, OrderStatusPayment, Status } from "./style";
import { useHistory } from "react-router-dom"

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

interface CardRequest{
    id: string;
    price: number;
    details: Cart[];
    user: User;
    status: string;
    payment: string;
}

interface CardRequestProps{
    request: CardRequest;
}


function CardRequest({request}: CardRequestProps) {
    const history = useHistory();

    const detailsRequestClient = () => {
        history.push(`/details/${request.id}`)
    }

    function changeColor(){
        if(request.status === "Aguardando aceitação"){
            return "#4CDE18"
        }else if(request.status === "Em preparo"){
            return "blue"
        }else if(request.status === "Em transporte"){
            return "#10E8DB"
        }
        return "red"
    }
        
    return(
        <Container onClick={detailsRequestClient}>
            <span>Id: {request.id}</span>
            <OrderStatusPayment>
                <span>Status: {request.status}</span>
                <Status color={changeColor()}></Status>
            </OrderStatusPayment>
            <span>Forma de pagamento: {request.payment}</span>
        </Container>
    )
}

export default CardRequest;