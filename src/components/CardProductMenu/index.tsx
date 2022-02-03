import { useAuth } from "../../context/Auth/AuthContext";
import { useCart } from "../../context/Cart/CartContext";
import {Container, Div} from "./style"
interface CardProductMenuProps{
    product: Product;
    activePopupWarning: () => void;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    description?: string;
    quantityStock: number;
}

function CardProductMenu({product, activePopupWarning}: CardProductMenuProps) {
    const {accessToken} = useAuth();
    const {addProduct} = useCart();

    const selectOption = () =>{
        if(!accessToken){
            activePopupWarning();
        }else{
            addProduct(product);
        }
    }
    return(
        <Container>
          <img src={product.img} alt="" /> 
          <span>{product.name}</span>
          <Div>
              <span>{`R$ ${((product.price).toFixed(2)).toString().replace(".", ",")}`}</span>
              <button onClick={selectOption}>Comprar</button>
          </Div>
        </Container>

    )
}

export default CardProductMenu;