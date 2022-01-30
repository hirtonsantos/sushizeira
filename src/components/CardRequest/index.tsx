import { Container, OrderStatusPayment, Status } from "./style";

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
    
    return(
        <Container>
            <span>Id: {request.id}</span>
            <OrderStatusPayment>
                <span>Status: {request.status}</span>
                <Status></Status>
            </OrderStatusPayment>
            <span>Forma de pagamento: {request.payment}</span>
        </Container>
    )
}

export default CardRequest;