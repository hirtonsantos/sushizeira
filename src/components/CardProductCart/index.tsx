import { useAuth } from "../../context/Auth/AuthContext";
import { useCart } from "../../context/Cart/CartContext";
import {Container, Div, ContainerAmount, ContainerDiv} from "./style"
interface CardProductCartProps{
    product: Product;
}

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

function CardProductCart({product}: CardProductCartProps) {
    const {accessToken} = useAuth()
    const {addQuantidade, subQuantidade, deleteProduct} = useCart();
     
    return(
        <Container>
          <img src={product.img} alt="" /> 
          <ContainerDiv>
            <span>{product.name}</span>
            <ContainerAmount>
                <button onClick={() => subQuantidade(product)}>-</button>
                <span>{product.quantidade}</span>
                <button onClick={() => addQuantidade(product)} className="btn-add">+</button>
            </ContainerAmount>
            <Div>
                <span>{`R$ ${((product.price*product.quantidade).toFixed(2)).toString().replace(".", ",")}`}</span>
                <button onClick={() => deleteProduct(product)}>Remover</button>
            </Div>
          </ContainerDiv>
        </Container>

    )
}

export default CardProductCart;