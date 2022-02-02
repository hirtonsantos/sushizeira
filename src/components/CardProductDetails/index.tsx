import {Container, ContainerDiv, Div} from "./style"

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    img: string;
    description?: string;
    quantityStock: number;
    quantidade: number;
    userId: number;
}

interface CardProductDetailsProps{
    product: Product;
}

function CardProductDetails({product}: CardProductDetailsProps) {
    
    return(
        <Container>
          <img src={product.img} alt="" /> 
          <ContainerDiv>
            <span>{product.name}</span>
            <Div>
                <span>{`R$ ${((product.price*product.quantidade).toFixed(2)).toString().replace(".", ",")}`}</span>
                <span>{product.quantidade}</span>
            </Div>
          </ContainerDiv>
        </Container>
    )
}

export default CardProductDetails;