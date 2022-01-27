import { useAuth } from "../../context/Auth/AuthContext";
import {Container, Div} from "./style"
interface CardProductMenuProps{
    img: string;
    textTitle: string;
    price: number;
    activePopupWarning: () => void;
}

function CardProductMenu({img, textTitle, price, activePopupWarning}: CardProductMenuProps) {
    const {accessToken} = useAuth()
    const selectOption = () =>{
        if(!accessToken){
            activePopupWarning()
        }
    }
    return(
        <Container>
          <img src={img} alt="" /> 
          <span>{textTitle}</span>
          <Div>
              <span>{`R$ ${((price).toFixed(2)).toString().replace(".", ",")}`}</span>
              <button onClick={selectOption}>Comprar</button>
          </Div>
        </Container>

    )
}

export default CardProductMenu;